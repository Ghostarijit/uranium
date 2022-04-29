const jwt = require("jsonwebtoken");
const blogModel = require("../model/blogModel");
const { default: mongoose } = require('mongoose');
const validateToken = async function(req, res, next) {
    try {
        let token = req.headers['x-api-key'] || req.headers['x-Api-key']
        if (!token) {
            res.status(404).send({ status: false, msg: "token must be present" });
        }

        let decodedtoken = jwt.verify(token, "group-12-project-1")
        if (!decodedtoken) {
            return res.status(401).send({ status: false, msg: "token is invalid" });


        }
        next();
    } catch (err) {
        res.status(500).send({ msg: Error, error: err.message })

    }


}
const authorization = async function(req, res, next) {
    try {
        let token = req.headers['x-api-key'] || req.headers['x-Api-key']
        if (!token) return res.status(401).send({ status: false, msg: "Please Give Token" });
        // BlogId check list
        let BlogId = req.params.BlogId || req.query.BlogId || req.body.BlogId || req.headers.BlogId

        if (!BlogId) return res.status(400).send({ status: false, msg: "Please Give BlogId" })

        if (mongoose.Types.ObjectId.isValid(BlogId)) return res.status(400).send({ status: false, msg: "Please Give valied Blog ObjectId" })
            // Token verification
        const decodedtoken = jwt.verify(token, "group-12-project-1")
        if (!decodedtoken.authorId) return res.status(400).send({ status: false, msg: "In Token there is no Author Id " })

        if (!decodedtoken) return res.status(401).send({ status: false, msg: "token is invalid" });

        const blog = await blogModel.findById(BlogId)
            // Author check
        const authorId = blog.authorId
        if (!authorId && mongoose.Types.ObjectId.isValid(authorId)) return res.status(400).send({ status: false, msg: "Please Give valied Author ObjectId" })

        console.log(blog)
        const id = decodedtoken.authorId
        if (authorId != id)
            return res.status(403).send({ status: false, msg: "cannot access" });
        next()

    } catch (err) {
        res.status(500).send({ msg: Error, error: err.message })
    }

}



module.exports.authorization = authorization

module.exports.validateToken = validateToken