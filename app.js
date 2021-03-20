const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoConnect = require('./util/database')

// const shopRoute = require("./routes/shop");
// const adminRoute = require("./routes/admin");
// const errorController = require("./controllers/error");
// const { cart } = require("./controllers/shop");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then(user =>{
//       req.user = user;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.set("view engine", "ejs");
app.set("views", "views");

// app.use(shopRoute);
// app.use("/admin", adminRoute);
// app.use(errorController.get404);

mongoConnect((client)=>{
  console.log(client);
  app.listen(5555)

})

