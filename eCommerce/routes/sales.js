// Import Express
const express = require('express');

// Import Router
const router = express.Router();

// Import Mongoose
const mongoose = require('mongoose');

// Import Model
const Sales = require('../models/Sales');
const Products = require('../models/Products');

//GET ALL Sales
router.get('/', async (req, res) => {
    try {
        const sales = await Sales.find()
        .populate('products')
        res.json(sales);
    } catch (err) {
            res.json({ message: err });
        }
});

//GET SPECIFIC SALE
router.get('/:saleId', async (req, res) => {
    try {
        const saleId = await Sales.findById(req.params.saleId)
        res.json(saleId);
    } catch (err) {
            res.json({ status: "404 Not Found", message: err });
        }
});


//SUBMIT A SALE
router.post('/', async (req, res) => {
    const sale = new Sales({
        _id: mongoose.Types.ObjectId(),
        direction: req.body.direction,
        priceTotal: req.body.priceTotal,
        products: req.body.productID
    });
    try {
        const savedSale = await sale.save();
        res.json(savedSale);
    } catch (err) {
            res.json({ message: err });
        }
});

// Export Router
module.exports = router;