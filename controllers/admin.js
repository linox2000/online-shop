const Product = require('../models/product');

exports.getAddProduct = (req,res) =>{
    res.render('admin/add-product',{
        pageTitle :'Add Product',
        path:'/admin/add-product'
    })
};

exports.postAddProduct = (req,res) =>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const products = new Product(title, imageUrl, description, price);
    products.save()
    res.redirect('/')
};

exports.getProducts = (req,res) =>{
    Product.fetchAll(products =>{
        res.render('admin/products',{
            prods:products,
            pageTitle :'Admin Product',
            path:'/admin/products'
        })

    }

    )
};
