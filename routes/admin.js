const express = require('express');
const route = express.Router();

const adminController = require('../controllers/products');

route.get('/add-product',adminController.getAddProduct);

route.post('/add-product',adminController.postAddProduct);

// roote.get('/products',)




module.exports = route;