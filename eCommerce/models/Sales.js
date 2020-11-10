// Import Mongoose
const mongoose = require('mongoose');

// Define Sales Schema
const SalesSchema = mongoose.Schema({
    direction: {
        type: String,
        required: true
    },
    priceTotal: {
        type: Number,
        default: 0
    },
    products: { type: mongoose.Schema.Types.ObjectID, ref: 'Products', required: true}
});

module.exports = mongoose.model('Sales', SalesSchema);