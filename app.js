const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','views');

app.use(shopRoute);

app.use('/admin',adminRoute);

app.use((req,res)=>{
    res.render('404',{pageTitle:'Page Not Found',path:''})
});









app.listen(3001)