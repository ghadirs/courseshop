const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class LineItem extends Model {}

LineItem.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "public",
    tableName: "exam",
  }
);

module.exports = LineItem;
