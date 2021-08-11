const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  `postgres://${process.env.PGUSER}:${process.env.PGPASS}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`
);
