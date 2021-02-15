const express = require('express');

const route = express.Router();

const shopController = require('../controllers/shop')


route.get('/',shopController.getIndex);

route.get('/products',shopController.products);

route.get('/cart',shopController.cart);

route.get('/orders',shopController.orders);







module.exports = route;