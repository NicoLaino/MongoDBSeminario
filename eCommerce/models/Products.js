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

/*const SalesSchema = mongoose.Schema({
    direccion: {
        type: String,
        required: true
    },
    priceTotal: {
        type: Number,
        default: 0
    },
    products: [ProductSchema]
});*/

module.exports = mongoose.model('Products', ProductSchema);

//module.exports = mongoose.model('Sales', SalesSchema);