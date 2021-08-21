const express = require("express");
const Router = express.Router();

const {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getAll,
} = require("../controllers/course.controller");

Router.route("/courses/get_course/:id").get(getCourse);

Router.route("/courses/create_course").post(createCourse);

Router.route("/courses/get_all").get(getAll);

Router.route("/courses/update_course/:id").put(updateCourse);

Router.route("/courses/delete_course/:id").delete(deleteCourse);

module.exports = Router;
