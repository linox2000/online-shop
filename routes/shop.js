const express = require('express');

const route = express.Router();

const shopController = require('../controllers/shop')


route.get('/',shopController.getIndex);

route.get('/products',shopController.getProducts);

route.get('/products/:productId',shopController.getProduct)

route.get('/cart',shopController.cart);

route.post('/cart',shopController.postCart)

route.get('/orders',shopController.getOrders);

route.post('/create-order', shopController.postOrder);

route.post('/cart-delete-item',shopController.postCartDeletProduct)








module.exports = route;