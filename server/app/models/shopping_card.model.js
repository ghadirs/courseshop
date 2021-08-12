const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../config/db");

class ShoppingCard extends Model {}

ShoppingCard.init(
  {
    shoppingCardId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "shop",
    tableName: "shoppingCard",
  }
);

module.exports = ShoppingCard;
