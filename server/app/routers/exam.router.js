const express = require("express");
const Router = express.Router();

const {
  getExam,
  createExam,
  updateExam,
  deleteExam,
  getAll,
} = require("../controllers/exam.controller");

Router.route("/exams/get_exam/:id").get(getExam);

Router.route("/exams/create_exam").post(createExam);

Router.route("/exams/get_all").get(getAll);

Router.route("/exams/update_exam/:id").put(updateExam);

Router.route("/exams/delete_exam/:id").delete(deleteExam);

module.exports = Router;
