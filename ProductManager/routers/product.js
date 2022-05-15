const express = require('express');

const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById
} = require('../controllers/product');

router.post('/product/new', createProduct);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

module.exports = router;