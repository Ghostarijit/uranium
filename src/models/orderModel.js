const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: { type: ObjectId, ref: 'app1' },
    productId: { type: ObjectId, ref: 'app2' },
    amount: Number,
    isFreeAppUser: Boolean,
    date: { type: Date, default: Date.now(), }

}, { timestamps: true });
module.exports = mongoose.model('order1', orderSchema)