const express = require("express");
const Router = express.Router();

const {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getAll,
} = require("../controllers/course.controller");

Router.route("/users/get_course/:id").get(getCourse);

Router.route("/users/create_course").post(createCourse);

Router.route("/users/get_all").get(getAll);

Router.route("/users/update_course/:id").put(updateCourse);

Router.route("/users/delete_course/:id").delete(deleteCourse);

module.exports = Router;
