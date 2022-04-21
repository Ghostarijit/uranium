const req = require("express/lib/request")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const orderModel = require("../models/orderModel")
const { deprecationHandler } = require("moment")
    //const UserModel = require("../models/userModel")

///const basicCode= async function(req, res) {
// let tokenDataInHeaders= req.headers.token
//console.log(tokenDataInHeaders)
//counter
// console.log( "HEADER DATA ABOVE")
// console.log( "hey man, congrats you have reached the Handler")
// res.send({ msg: "This is coming from controller (handler)"})

//  }


//const createAUser = function(req, res) {
//   let requestBody = req.body
//   let headers  = req.headers


//Printing all the headers before modification - addition of a new header called 'month'
//  console.log('Request headers are before: ', headers)

//Accessing a request header called 'batch'
// let batchHeader = headers["batch"] // headers.batch 

///Accessing a request header called 'content-type'
//  let contentHeader = headers['content-type'] // headers.content-type

// console.log('Content Type hedser is: ',contentHeader)
//  console.log('Batch header is: ', batchHeader)

//Adding a new requets header
// req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


//Printing the headers after modification - addition of a new header called 'month'
//  console.log('Request headers are after: ', headers)


// console.log('Request property called current-day', req['current-day'])

//Adding a response header
// res.header('year', '2022')

//  res.send('Just create a user')
//}

let Document = async function(req, res) {
    let data = req.body

    let savedData = await userModel.create(data)
    res.send({ msg: savedData })

}

let Product = async function(req, res) {
    let data = req.body

    let savedData = await productModel.create(data)
    res.send({ msg: savedData })

}

let Order = async function(req, res) {
    let freeuser = req.headers["isfreeappuser"]
    let deta = req.body
    let a = req.body.productId
    let b = req.body.userId
    if (a && b) {
        let savedData = await orderModel.create(data)
        res.send({ msg: savedData })

    } else {
        res.send({ msg: "please enter userId and productId" })
    }
    let userbalance = await userModel.findOne({ _id: req.body.userId }).select('balance')
    let productprice = await productModel.findOne({ _id: req.body.productId }).select('price')
    if (!freeuser && userbalance.balance >= productprice.price) {

        let newBalance = userbalance.balance - productprice.price
        let orderData = await orderModel.create({

            userId: req.body.userId,
            productId: req.body.productId,
            amount: productprice.price,
            isFreeAppUser: false

        })
        await userModel.findOneAndUpdate({ _id: req.body.userId }, { balance: newBalance })
        res.send({ msg: orderData })
    }

    if (!freeuser && userbalance.balance < productprice.price) {
        return res.send({ msg: "insufficient Balance" })
    }

    if (freeuser) {
        let orderData = await orderModel.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: 0,
            isFreeAppUser: true


        })

        res.send({ msg: orderData })

    }




}

module.exports.Document = Document

module.exports.Product = Product

module.exports.Order = Order
    //module.exports.basicCode = basicCode

















//const createUser = async function(req, res) {
// let data = req.body
//   let savedData = await UserModel.create(data)
// res.send({ msg: savedData })
//}

//const getUsersData = async function(req, res) {
//let allUsers = await UserModel.find()
// res.send({ msg: allUsers })
//}

//module.exports.createUser = createUser
//module.exports.getUsersData = getUsersData
//module.exports.basicCode = basicCode