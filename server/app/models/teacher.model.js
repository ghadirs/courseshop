const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Teacher extends Model {}

Teacher.init(
  {
    teacherId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasCertificated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "user",
    tableName: "teacher",
  }
);

module.exports = Teacher;
