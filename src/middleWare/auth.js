const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const validateToken = async function (req, res, next) {
    try {
        let id = req.query.id
        console.log(id)

        if (id === undefined) return (res.status(404).send('please provide authorId'))
        if (!mongoose.isValidObjectId(id)) return (res.status(400).send("Object Id is invalid"))
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ Msg: 'no sucn user existsin db' })
        let token = req.headers['tokens']
        if (!token) return res.status(400).send("msg:token must be present ")
        let validation = jwt.verify(token, "project-1-group-12")
        if (validation.userId == id) return res.status(400).send('you are not authoried to change the document')
        next()
    }
    catch (err) {
        res.status(500).send(err)
    }
}
module.exports.validateToken = validateToken
