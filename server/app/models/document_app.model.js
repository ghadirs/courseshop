const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class DocumentApp extends Model {}

DocumentApp.init(
  {
    documentAppId: {
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
    documentId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    open: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    closed: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    didApprove: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    appStatus: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "course",
    tableName: "documentApp",
  }
);

module.exports = DocumentApp;
