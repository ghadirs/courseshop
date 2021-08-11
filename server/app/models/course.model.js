const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/db");

class Course extends Model {}

Course.init(
  {
    courseId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchaseAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deliverystatus: {
      type: DataTypes.ENUM("delivered", "failed", "cancelled"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseType: {
      type: DataTypes.ENUM("Video", "Webinar", "PDF", "Voice"),
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: "course",
    tableName: "course",
  }
);

module.exports = Course;
