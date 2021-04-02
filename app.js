const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoConnect = require('./util/database').mongoConnect;

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");
const User = require('./models/user');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));



app.set("view engine", "ejs");
app.set("views", "views");

app.use((req,res,next)=>{
  User.findById('605b56044eae61bae4ca452b')
  .then(user=>{
    req.user = new User(user.name,user.email,user.cart,user._id) ;
    next();
  })
  .catch(err => console.log(err))
})

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(errorController.get404);

mongoConnect(()=>{

  app.listen(5555)

})

