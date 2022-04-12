const UserModel = require("../models/userModel")

//const createUser = async function(req, res) {
// let data = req.body
//  let savedData = await UserModel.create(data)
//   res.send({ msg: savedData })
//}

//const getUsersData = async function(req, res) {
//   let allUsers = await UserModel.find()
//  res.send({ msg: allUsers })
//}

//module.exports.createUser = createUser
//module.exports.getUsersData = getUsersData


const bookschema1 = async function(req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({ msg: savedData })
}

const bookschema2 = async function(req, res) {
    let allUsers = await UserModel.find()
    res.send({ msg: allUsers })
}


module.exports.bookschema1 = bookschema1
module.exports.bookschema2 = bookschema2