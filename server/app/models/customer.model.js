const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/db");

class Customer extends Model {}

Customer.init(
  {
    customerId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payments: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    shoppingCards: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    orders: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "user",
    tableName: "customer",
  }
);

module.exports = Customer;
