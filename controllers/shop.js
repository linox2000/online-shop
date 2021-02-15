const Product = require('../models/product');

exports.getIndex = (req,res)=>{
    Product.fetchAll(products =>{
        res.render('shop/index',{
            prods:products,
            pageTitle:'Shop',
            path:'/'
        })

    })
};

exports.products = (req,res)=>{
    Product.fetchAll(products =>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'Products',
            path:'/products'
        })

    })
};

exports.cart = (req,res)=>{
    res.render('shop/cart',{
        pageTitle:'Cart',
        path:'/cart'
    })
};

exports.orders = (req,res)=>{
    res.render('shop/orders',{
        pageTitle:'Orders',
        path:'/orders'
    })
}