const express = require('express');
const route = express.Router();

const adminController = require('../controllers/admin');

route.get('/add-product', adminController.getAddProduct);

route.get('/products', adminController.getProducts);


route.post('/add-product', adminController.postAddProduct);

route.post('/edit-product',adminController.postEditProduct);

route.post('/delete-product',adminController.postDeleteProduct);


route.get('/edit-product/:productId',adminController.getEditProduct)





module.exports = route;