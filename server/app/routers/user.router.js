const express = require("express");
const Router = express.Router();

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getAll,
} = require("../controllers/user.controller");

Router.route("/users/get_user/:id").get(getUser);

Router.route("/users/create_user").post(createUser);

Router.route("/users/get_all").get(getAll);

Router.route("/users/update_user/:id").put(updateUser);

Router.route("/users/delete_user/:id").delete(deleteUser);

module.exports = Router;
