const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({
  path: `${__dirname}/config.env`,
});

module.exports = new Sequelize(
  `postgres://${process.env.PGUSER}:${process.env.PGPASS}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
);
