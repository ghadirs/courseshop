const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/db");

class Webinar extends Model {}

Webinar.init(
  {
    webinarId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finishAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    teacherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "course",
    tableName: "webinar",
  }
);

module.exports = Webinar;
