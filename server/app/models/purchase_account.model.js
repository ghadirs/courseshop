const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/db");

class PurchaseAccount extends Model {}

PurchaseAccount.init(
  {
    purchaseAccountId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    billingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isClosed: {
      type: DataTypes.BOOLEAN,
    },
    closed: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    open: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "shop",
    tableName: "purchaseAccount",
  }
);

module.exports = PurchaseAccount;
