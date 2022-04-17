const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema({
    // bookName: String,
    // authorName: String,
    // tags: [String],

    //isPublished: Boolean,
    //prices: {
    // indianPrice: String,
    //  europePrice: String,
    //},
    //sales: { type: Number, default: 10 },

    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
    // "ch1 ": "awesome intro to JS",
    // "ch2" : "intro to nodejs",
    // "ch3" : "intro to db"
    //  }
    //summary: mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
    name: String,
    author: {
        type: ObjectId,
        ref: "Author1"

        // tupe: Number,
        // required: true
    },
    publisher: {
        type: ObjectId,
        ref: "publisher1"
            // tupe: Number,
            // required: true
    },
    price: Number,
    ratings: Number,
    isHardCover: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('book1', authorSchema) //users