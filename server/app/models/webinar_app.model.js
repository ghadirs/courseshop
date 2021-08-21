const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class WebinarApp extends Model {}

WebinarApp.init(
  {
    webinarAppId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    courseId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    webinarId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    open: {
      type: DataTypes.DATE,
    },
    closed: {
      type: DataTypes.DATE,
    },
    didApprove: {
      type: DataTypes.BOOLEAN,
    },
    appStatus: {
      type: DataTypes.ENUM("open", "closed", "pending"),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "course",
    tableName: "webinarApp",
  }
);

module.exports = WebinarApp;
