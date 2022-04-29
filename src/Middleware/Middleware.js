const jwt = require("jsonwebtoken");
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
        let authorId = req.params.authorId || req.query.authorId || req.body.authorId || req.headers.authorId


        const decodedtoken = jwt.verify(token, "group-12-project-1")
        if (!decodedtoken)
            return res.status(401).send({ status: false, msg: "token is invalid" });

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