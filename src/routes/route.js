const express = require('express');
const router = express.Router();

const allControler = require("../controller/allController")

const Middleware = require("../Middleware/Middleware.js")



router.post("/createAuthor", allControler.createAuthor)

router.post("/createBlogs", Middleware.validateToken, allControler.createBlogs)
router.get("/get/blogs", Middleware.validateToken, allControler.getBlogs)
router.put("/blogs/:blogId", Middleware.validateToken, Middleware.authorization, allControler.updateblogs)
router.delete("/blogs/:Id", Middleware.validateToken, Middleware.authorization, allControler.deletById)
router.delete("/blogs", Middleware.validateToken, Middleware.authorization, allControler.deletByProperty)


router.post("/login", allControler.loginUser)





module.exports = router;