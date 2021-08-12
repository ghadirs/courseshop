const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Category extends Model {}

Category.init(
  {
    categoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courses: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    teachers: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "public",
    tableName: "category",
  }
);

module.exports = Category;
