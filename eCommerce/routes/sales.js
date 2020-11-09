// Import Express
const express = require('express');

// Import Router
const router = express.Router();

// Import Model
const Sales = require('../models/Products');

//GET ALL Sales
router.get('/', async (req, res) => {
    try {
        const sales = await Sales.find();
        res.json(sales);
    } catch (err) {
            res.json({ message: err });
        }
});

//GET SPECIFIC SALE
router.get('/:saleId', async (req, res) => {
    try {
        const saleId = await Products.findById(req.params.saleId)
        res.json(saleId);
    } catch (err) {
            res.json({ message: err });
        }
});

//DELETE SPECIFIC SALE
router.delete('/:saleId', async (req, res) => {
    try {
        const removeByID = await Sales.remove({ _id: req.params.saleId})
        res.json(removeByID);
    } catch (err) {
            res.json({ message: err });
    }
});

//SUBMIT A SALE
router.post('/', async (req, res) => {
    const sale = new Sales({
        direccion: req.body.direccion,
        pricetotal: req.body.priceTotal,
        products: req.body.products
    });
    try {
        const savedSale = await sale.save();
        res.json(savedSale);
    } catch (err) {
            res.json({ message: err });
        }
});


//UPDATE SPECIFIC SALE
router.patch('/:saleId', async (req, res) => {
    try {
        const updateByID = await Products.updateOne({ _id: req.params.saleId}, { $set: {direction: req.body.direction, priceTotal: req.body.priceTotal, products: req.body.products}})
        res.json(updateByID);
    } catch (err) {
            res.json({ message: err });
    }
});

// Export Router
module.exports = router;