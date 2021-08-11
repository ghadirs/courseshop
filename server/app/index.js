const express = require("express");
const app = express();
const sequelize = require("./config/db");

app.use(express.json());

sequelize
  .authenticate()
  .then(console.log(`postgre Connected on port : ${process.env.PGPORT}`))
  .catch((e) => console.log("DBERROR: ", e));

require("./routers")(app);

module.exports = app;
