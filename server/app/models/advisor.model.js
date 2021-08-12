const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Advisor extends Model {}

Advisor.init(
  {
    advisorId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    advisingPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    schema: "user",
    tableName: "advisor",
  }
);

module.exports = Advisor;
