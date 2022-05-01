
const mongoose = require('mongoose');

const blogModel = require("../model/blogModel")
const deletById = async (req, res) => {
    try {
        let data = req.params.blogId
        // blogId  validation
        let idCheck = mongoose.isValidObjectId(data)
        if (!idCheck) return res.status(400).send({ status: false, msg: "blogId is not a type of objectId" })
        let status = await blogModel.findById(data)
        if (!status) return res.status(404).send({ status: false, msg: "this blog is not present" })
        if (status.isDeleted === true) {
            return res.status(404).send({ status: false, msg: "this blog is already deleted" })
        }
        let delteblog = await blogModel.findByIdAndUpdate(data,
            { $set: { isDeleted: true, deleteAt: Date.now() } },
            { new: true })
        return res.status(200).send("this blog is deleted successfully")
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ status: "error", error: err.message })
    }
}
const deletByProperty = async (req, res) => {
    try {
        let data = req.query
        const { category, tags, authorId, subcategory } = data
        delete data.title
        delete data.body
        let token = req.query.id
        let document = {
            isDeleted: false,
            authorId: token,
            ...data
        }

        if (Object.keys(data).length === 0) {
            return res.status(400).send({ status: false, msg: "plz enter the data" })
        }

        if (!(authorId || category || tags || subcategory || data.isPublished)) {
            return res.status(404).send({ status: false, msg: "Plz enter valid data for deletion" })
        }
        let exist = await blogModel.findOne({ $and: [data, { isDeleted: false }] })

        if (exist.length === 0) return res.status(404).send({ status: false, msg: "this blog doesn't exist" })
        console.log(token)
        console.log(exist.authorId)
        console.log(exist)

        if (exist.authorId !== token) return res.status(403).send({ status: false, msg: "You are not authorized to access this data" })
        let property = await blogModel.updateMany(document,
            { $set: { isDeleted: true, deleteAt: Date.now() } },
            { new: true });

        res.status(200).send({ status: true, msg: property })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ status: "error", error: err.message })
    }
}
module.exports.deletById = deletById
module.exports.deletByProperty = deletByProperty
