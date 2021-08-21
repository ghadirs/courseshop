const Admin = require("../models/admin.model");
const Teacher = require("../models/teacher.model");
const Advisor = require("../models/advisor.model");
// const admin = require('../models/admin.model')

exports.roleValidator = async (role, condition) => {
  try {
    if (!role) {
      throw new Error("You're not a user");
    }
    if (role === "admin") {
      return await Admin.findOne({ where: condition });
    }
    if (role === "teacher") {
      return await Teacher.findOne({ where: condition });
    }
    if (role === "advisor") {
      return await Advisor.findOne({ where: condition });
    }
  } catch (err) {
    return err;
  }
};
