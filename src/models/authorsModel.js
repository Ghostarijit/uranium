const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const bookSchema = new mongoose.Schema({


    author_id: {
        type: Number,
        required: true
    },
    author_name: String,
    age: Number,
    address: String
}, { timestamps: true });


module.exports = mongoose.model('Authors', bookSchema)