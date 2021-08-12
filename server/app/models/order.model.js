const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Order extends Model {}

Order.init(
  {
    orderId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    orderStatus: {
      type: DataTypes.ENUM("completed", "failed", "cancelled"),
      allowNull: false,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "shop",
    tableName: "order",
  }
);

module.exports = Order;
