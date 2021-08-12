const express = require("express");
const Router = express.Router();

const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getAll,
} = require("../controllers/category.controller");

Router.route("/categories/get_category/:id").get(getCategory);

Router.route("/categories/create_category").post(createCategory);

Router.route("/categories/get_all").get(getAll);

Router.route("/categories/update_category/:id").put(updateCategory);

Router.route("/categories/delete_category/:id").delete(deleteCategory);

module.exports = Router;
