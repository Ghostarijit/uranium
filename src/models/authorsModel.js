const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const bookSchema = new mongoose.Schema({


    // author_id: {
    //    type: Number,
    //    required: true
    // },
    name: String,
    age: Number,
    address: String,
    rating: Number
}, { timestamps: true });


module.exports = mongoose.model('Author1', bookSchema)






//{
//   "name":"Chetan Bhagat",
//   "age":"50",
//  "address":"New Delhi"



//  }