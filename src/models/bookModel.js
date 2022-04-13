const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    //bookName: String,
    //authorName: String,
    //  year: Number,
    //  tags: [String],

    // isPublished: Boolean,
    //  prices: {
    //     indianPrice: String,
    //     europePrice: String,
    //  },
    // sales: { type: Number, default: 10 },
    //  page: Number
    name: String,
    author_id: {
        type: Number,
        required: true
    },
    price: Number,
    rating: Number,


}, { timestamps: true });


module.exports = mongoose.model('bookss', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover