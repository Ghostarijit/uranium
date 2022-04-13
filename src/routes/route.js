const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser)

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.post("/createBook", BookController.createNewAuthor)

//router.get("/getBooksData", BookController.getBooksData)

//router.get("/getBooksinYear", BookController.getBooksinYear)

//router.post("/getParticularbooks", BookController.getParticularbooks)

//router.get("/getXINRBooks", BookController.getXINRBooks)

//router.get("/getRandombooks", BookController.getRandombooks)


module.exports = router;