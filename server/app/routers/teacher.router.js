const express = require("express");
const Router = express.Router();

const {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getAll,
} = require("../controllers/teacher.controller");

Router.route("/teachers/get_teacher/:id").get(getTeacher);

Router.route("/teachers/create_teacher").post(createTeacher);

Router.route("/teachers/get_all").get(getAll);

Router.route("/teachers/update_teacher/:id").put(updateTeacher);

Router.route("/teachers/delete_teacher/:id").delete(deleteTeacher);

module.exports = Router;
