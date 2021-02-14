const express = require('express');

const route = express.Router();

const shopController = require('../controllers/products')

route.get('/',shopController.getProducts);

route.get('/products',shopController.getProduct);

route.get('/cart',shopController.getCart);

route.get('/orders',shopController.getOrders);

route.get('/checkout',shopController);





module.exports = route;