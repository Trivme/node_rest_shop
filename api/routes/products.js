const express = require('express');
const router = express.Router();
const mongoos = require('mongoose');

const Product = require('../models/product');

    router.get('/', (req, res, next) => {
        res.status(200).json({
            message: 'Handling GET request to /products'
        });
    });

    router.post('/', (req, res, next) =>
        const product = new Product({
            _id: new mongoos.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        });
        res.status(201).json({
            message: 'Handling POST request to /products',
            createdProduct: product
        });
    });

    router.get('/:productId', (req, res, next) => {
       const id = req.params.productId;
       if(id === 'special'){
           res.status(200).json({
               message: 'You discovered the special ID'
           });
       } else {
           res.status(200).json({
               message: 'You passed an ID'
           });
       }
    });

    router.patch('/:productId', (req, res, next) => {
       res.status(200).json({
           message: 'Updated product!'
       })
    });

    router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'DELITED product!'
    })
});

    module.exports = router;
