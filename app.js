const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");
const User = require("./models/user");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  User.findById("60672638957f260ef89c1c29")
    .then((user) => {
      req.user =user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(errorController.get404);

mongoose.connect(
  "mongodb+srv://mlino:linox2017@@@cluster0.dkcqy.mongodb.net/shop?retryWrites=true&w=majority"
  ,
  { useNewUrlParser: true })
    .then((result) => {
      User.findOne('60672638957f260ef89c1c29').then(user =>{
        if(!user){
          const user = new User({
            name:'Manuel',
            email:'lino@hotmail.com',
            cart:{
              items:[]
            }
          });
          user.save();

        }
      })
      console.log("CONNECTED");
      app.listen(5555);
    })
    .catch((err) => console.log(err));
