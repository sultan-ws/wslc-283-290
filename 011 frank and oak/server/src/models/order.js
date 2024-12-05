const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    items: Object,
    customer: Object,
    session: Object,
    amount: Number,
    status: {
        type: String,
        enum: ['pending', 'failed', 'successfull'],
        default: 'pending',
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

orderSchema.pre('save', function(){
    this.createdAt = Date.now;
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;