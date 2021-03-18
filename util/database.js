const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "linox2017@@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
