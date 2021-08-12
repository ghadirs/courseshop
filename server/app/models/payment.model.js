const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Payment extends Model {}

Payment.init(
  {
    paymentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM("successfull", "failed", "cancelled"),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "shop",
    tableName: "payment",
  }
);

module.exports = Payment;
