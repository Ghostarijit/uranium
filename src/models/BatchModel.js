const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const batchSchema = new mongoose.Schema({


    // author_id: {
    //    type: Number,
    //    required: true
    // },
    name: String,
    size: Number,
    program: String,

}, { timestamps: true });


module.exports = mongoose.model('Batch1', batchSchema)