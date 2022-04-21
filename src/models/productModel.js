const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Write the schema content
    name: String,
    category: String,
    price: Number
}, { timestamps: true });

module.exports = mongoose.model('app2', productSchema) //users