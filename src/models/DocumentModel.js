const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const ObjectId = mongoose.Schema.Types.ObjectId

const documentrSchema = new mongoose.Schema({

    name: String,
    gender: String,
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "Batch1"
            // tupe: Number,
            // required: true
    }
}, { timestamps: true });


module.exports = mongoose.model('Document1', documentrSchema) //users