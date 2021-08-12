const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Admin extends Model {}

Admin.init(
  {
    adminId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.ENUM("moderator", "founder"),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "user",
    tableName: "admin",
  }
);

module.exports = Admin;
