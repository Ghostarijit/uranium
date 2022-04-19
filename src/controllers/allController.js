const authorModel = require('../models/authorsModel')
const bookModel = require('../models/bookModel')
const publisherModel = require('../models/publisherModel')
const DocumentModel = require('../models/DocumentModel')
const BatchModel = require('../models/BatchModel')
const mongoose = require("mongoose")



//const createNewAuthor = async function(req, res) {

//const reqAuthor = req.body
// const SavedAuthor = await authorModel.create(reqAuthor)
// res.send({ msg: SavedAuthor })

//}

//const createNewBook = async function(req, res) {

//  const reqBook = req.body
//  if (reqBook.author && reqBook.publisher) {
//     const SavedBook = await bookModel.create(reqBook)
//res.send({ msg: SavedBook })
//  } else
//   res.send({ msg: "Authorid and publisherid must be present" })



//}

//const createPublisher = async function(req, res) {

//const reqPublisher = req.body

//const SavedPublisher = await publisherModel.create(reqPublisher)
//res.send({ msg: SavedPublisher })

//}





//const allBooks = async function(req, res) {

//let a = bookModel.find({ author: author },{publisher:publisher})

// console.log(a)
// if (bookModel.find({ author: true }, { publish: true })) {
//const SavedBook = await bookModel.find().populate(["publisher", "author"])

// res.send({ msg: SavedBook })
// } else {
//    res.send({ msg: "AutherId and PublisherId must be present" })
// }
//}
//const allBooks = async function(req, res) {
//const authorDetails = await authorModel.find({ author_name: "Chetan Bhagat" })
//const id = authorDetails[0].author_id
// const booksname = await bookModel.find({ author_id: id }).select({ name: 1 })


// res.send({ msg: booksname })

//}&& bookModel.publisher

//"publisher1_id"
//const updatedBookPrice = async function(req, res) {
//   const bookDetails = await bookModel.find({ name: "Two states" })
//   const id = bookDetails[0].author_id
// const booksname = await authorModel.find({ author_id: id }).select({ author_name: 1, _id: 0 })

// const bookName = bookDetails[0].name
// let authorRatingCheck = req.body.author.rating
// let m = req.body.author
// if (authorRatingCheck >= 3.5) {
// const updateprice = await bookModel.updateMany({ ratings: { $gt: 3.5 } }, { $inc: { price: 10 } })
// res.send({ msg: updateprice })
//  } else
// res.send({ msg: ":auther Rating should be 3.5 and more" })
//}

//const authorName = async function(req, res) {
// const booksId = await authorModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
//  const id = booksId.map(inp => inp.author_id)

// let arijit = []
//  for (let i = 0; i < id.length; i++) {
//     let m = id[i]
//       const author = await authorModel.find({ author_id: m }).select({ author_name: 1, _id: 0 })
//      arijit.push(author)
//   }

//  const authorNamee = arijit.flat()

//  res.send({ msg: authorNamee })


//}
//const pubPenHar = async function(req, res) {
// let b = req.body.HarperCollins

//   let a = publisherModel.find({ name: "HarperCollins" })
// console.log(a)

//const SavedBook = await bookModel.updateMany(a, { $set: { isHardCover: false } })

//  res.send({ msg: SavedBook })
// } else {
//    res.send({ msg: "AutherId and PublisherId must be present" })
// }
//}


const createNewBatch = async function(req, res) {

    const reqBatch = req.body
    const SavedBatch = await BatchModel.create(reqBatch)
    res.send({ msg: SavedBatch })

}

const createNewDocument = async function(req, res) {

    const reqBatch = req.body
    const Savedocument = await DocumentModel.create(reqBatch)
    res.send({ msg: Savedocument })

}


const scolership = async function(req, res) {
    const m = await DocumentModel.find({ gender: { $in: 'female' }, percentage: { $gte: 70 } }).populate("batch")


    res.send({ msg: m })


}

const devolopers = async function(req, res) {

    let value1 = req.query.program
    let value2 = req.query.percentage

    const H = await BatchModel.find({ name: value1 }).select({ _id: 1 })
    const N = await DocumentModel.find({
        $and: [{ batch: { $in: H } }, { percentage: { $gte: value2 } }]
    }).populate("batch")


    res.send({ msg: N })
        //   { $in: value1 }

}
module.exports.createNewDocument = createNewDocument

module.exports.scolership = scolership

module.exports.devolopers = devolopers

//module.exports.createNewAuthor = createNewAuthor

//module.exports.createNewBook = createNewBook

//module.exports.createPublisher = createPublisher

//module.exports.allBooks = allBooks

//module.exports.pubPenHar = pubPenHar

//module.exports.allBooks = allBooks

//module.exports.updatedBookPrice = updatedBookPrice

//module.exports.authorName = authorName

module.exports.createNewBatch = createNewBatch