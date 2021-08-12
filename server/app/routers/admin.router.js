const express = require("express");
const Router = express.Router();

const {
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAll,
} = require("../controllers/admin.controller");

Router.route("/admins/get_admin/:id").get(getAdmin);

Router.route("/admins/create_admin").post(createAdmin);

Router.route("/admins/get_all").get(getAll);

Router.route("/admins/update_admin/:id").put(updateAdmin);

Router.route("/admins/delete_admin/:id").delete(deleteAdmin);

module.exports = Router;
