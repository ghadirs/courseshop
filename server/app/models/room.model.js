const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Room extends Model {}

Room.init(
  {
    roomId: {
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
    partipicants: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,
    },
    partipicantsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "public",
    tableName: "room",
  }
);

module.exports = Room;
