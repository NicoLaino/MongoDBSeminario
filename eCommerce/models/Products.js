// Import Mongoose
const mongoose = require('mongoose');

// Define Product Schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Products', ProductSchema);