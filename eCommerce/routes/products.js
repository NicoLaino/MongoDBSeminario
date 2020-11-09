// Import Express
const express = require('express');

// Import Router
const router = express.Router();

// Import Model
const Products = require('../models/Products');

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (err) {
            res.json({ message: err });
        }
});

//GET SPECIFIC PRODUCT
router.get('/:productId', async (req, res) => {
    try {
        const productId = await Products.findById(req.params.productId)
        res.json(productId);
    } catch (err) {
            res.json({ message: err });
        }
});

//DELETE SPECIFIC PRODUCT
router.delete('/:productId', async (req, res) => {
    try {
        const removeByID = await Products.remove({ _id: req.params.productId})
        res.json(removeByID);
    } catch (err) {
            res.json({ message: err });
    }
});

//SUBMIT A PRODUCT
router.post('/', async (req, res) => {
    const product = new Products({
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
            res.json({ message: err });
        }
});


//UPDATE SPECIFIC PRODUCT
router.patch('/:productId', async (req, res) => {
    try {
        const updateByID = await Products.updateOne({ _id: req.params.productId}, { $set: {name: req.body.name, description: req.body.description, stock: req.body.stock, price: req.body.price}})
        res.json(updateByID);
    } catch (err) {
            res.json({ message: err });
    }
});

// Export Router
module.exports = router;