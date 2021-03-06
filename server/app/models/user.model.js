const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isLoggedIn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    accountStatus: {
      type: DataTypes.ENUM("banned", "active", "deleted", "new"),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "user",
    tableName: "user",
  }
);

module.exports = User;
