const express = require("express");
const Router = express.Router();

const {
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getAll,
} = require("../controllers/customer.controller");

Router.route("/customers/get_customer/:id").get(getCustomer);

Router.route("/customers/create_customer").post(createCustomer);

Router.route("/customers/get_all").get(getAll);

Router.route("/customers/update_customer/:id").put(updateCustomer);

Router.route("/customers/delete_customer/:id").delete(deleteCustomer);

module.exports = Router;
