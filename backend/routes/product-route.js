const express = require('express')

const productItem = require('../models/product-schema');
// const {addProduct, getProduct}=req
const router = express.Router();


router.get('/view-products', async (req, res,next) => {
    try {
        const data = await productItem.find({}).exec();
        console.log('data saved');
        res.status(200).json({"Vegetarian":data});


    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })

    }
});

router.post('/add-product', async (req, res) => {
    try {
        const product = req.body;

        const newProduct = new productItem(product);
        const responce = await newProduct.save();
        console.log('data saved in mongo');
        res.status(200).json(responce);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })

    }
});
module.exports = router;