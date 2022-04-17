const mongoose = require('mongoose');



const publisherSchema = new mongoose.Schema({


    // author_id: {
    //    type: Number,
    //    required: true
    // },
    name: String,
    headQuarter: String,

}, { timestamps: true });


module.exports = mongoose.model('publisher1', publisherSchema)