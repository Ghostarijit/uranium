
const mongoose = require('mongoose');
const authorModel = require("../model/authorModel")
const blogModel = require("../model/blogModel")
const createBlogs = async function (req, res) {
    try {
        const data = req.body
        if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "plz enter some data" })
        let { authorId, title, body, category, tags, subcategory, isPublished, isDeleted } = data
        const id = await authorModel.findById(authorId)
        if (!id) {
            return res.status(404).send({ status: false, msg: "this Author is not present." })
        }
        if (!title) {
            return res.status(400).send({ status: false, msg: "title is not given" })
        }
        if (typeof title !== "string") return res.status(400)
            .send({ status: false, msg: "title should be string" });
        console.log(title.trim())
        data.title = data.title.trim()
        // body validation
        if (!body) {
            return res.status(400).send({ status: false, msg: "body is not Given" })
        }
        if (typeof body !== "string") return res.status(400)
            .send({ status: false, msg: "body should be string" });
        data.body = data.body.trim()
        // category validation
        if (!category) {
            return res.status(400).send({ status: false, msg: "category must be present" })
        }
        if (!Array.isArray(category)) return res.send({ status: false, msg: "category mustbe  array" })
        if (category.length === 0) return res.send({ status: false, msg: "enter string values inside category" })
        // if(category.every(x =>(typeof x !== 'string'))) return res.send("category shold be string")
        // if isPublished key is present
        if (isPublished) {
            if (typeof isPublished !== "boolean") {
                return res.status(400)
                    .send({ status: false, msg: "isPublished is boolean so,it can be either true or false" })
            }
        }
        // if isdeleted key is present
        if (isDeleted) {
            if (typeof isDeleted !== "boolean") {
                return res.status(400)
                    .send({ status: false, msg: "isDeleted is boolean so,it can be either true or false" })
            }
        }
        // tags validation
        if (tags) {
            if (!Array.isArray(tags)) return res.send("tags is not array")
        }
        // subcategory validation
        if (subcategory) {
            if (!Array.isArray(subcategory)) return res.status(400)
                .send({ status: false, msg: "subcategory should be array of strings" })
        }
        const Blog = await blogModel.create(data)
        return res.status(201).send({ status: true, data: Blog })
    }
    catch (err) {
        res.status(500).send({ status: "error", error: err.message })
    }
}
module.exports.createBlogs = createBlogs
