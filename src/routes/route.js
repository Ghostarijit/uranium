const express = require('express');
const router = express.Router();
//const UserModel = require("../models/userModel.js");
const UserController = require("../controllers/userController");

//router.get("/test-me", function(req, res) {
//res.send("My first ever api!")
//})

//router.post("/createUser", UserController.createUser)

//router.get("/getUsersData", UserController.getUsersData)


router.post("/bookschema1", UserController.bookschema1)

router.get("/bookschema2", UserController.bookschema2)


module.exports = router;