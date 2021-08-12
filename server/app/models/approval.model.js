const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Approval extends Model {}

Approval.init(
  {
    approvalId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    didApprove: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "public",
    tableName: "approval",
  }
);

module.exports = Approval;
