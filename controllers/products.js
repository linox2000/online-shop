const Product = require('../models/product');

exports.getAddProduct = (req,res)=>{
    res.render('admin/add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product'
    })
};

exports.postAddProduct = (req,res)=>{
    const  title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
 
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
 };

 exports.getProducts = (req,res)=>{
    Product.fetchAll(products =>{
        res.render('shop/index',{
            prods:products,
            pageTitle:'Shop',
            path:'/'
        });
    })
};

exports.getProduct = (req,res)=>{
    Product.fetchAll(products =>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'Products',
            path:'/products'
        })

    })
};

exports.getCart = (req,res)=>{
    res.render('shop/cart',{
        pageTitle:'Cart',
        path:'/cart'
    })
};

exports.getOrders = (req,res)=>{
    res.render('shop/orders',{
        pageTitle:'Orders',
        path:'/orders'
    })
};





