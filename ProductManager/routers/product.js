const express = require('express');

const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProduct
} = require('../controllers/product');

router.post('/product/new', createProduct);
router.post('/product/edit/:id', updateProduct);

router.delete('/product/:id/delete', deleteProductById);

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

module.exports = router;