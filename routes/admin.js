const express = require('express');
const route = express.Router();

const adminController = require('../controllers/admin');

route.get('/add-product', adminController.getAddProduct);

route.get('/products', adminController.getProducts);


route.post('/add-product', adminController.postAddProduct);





module.exports = route;