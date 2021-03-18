const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const sequelize = require("./util/database");

const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");
const errorController = require("./controllers/error");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(shopRoute);

app.use("/admin", adminRoute);

app.use(errorController.get404);

sequelize
  .sync()
  .then(result =>{

    app.listen(5555);
  })
  .catch((err) => console.log(err));

