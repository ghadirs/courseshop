const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/db");

class UserChat extends Model {}

UserChat.init(
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
    schema: "public",
    tableName: "userChat",
  }
);

module.exports = UserChat;
