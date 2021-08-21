const express = require("express");
const Router = express.Router();

// const { customerCheck } = require("../auth/customerCheck");
const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAll,
} = require("../controllers/order.controller");

Router.route("/orders/get_order/:id").get(getOrder);

Router.route("/orders/create_order").post(createOrder);

Router.route("/orders/get_all").get(getAll);

Router.route("/orders/update_order/:id").put(updateOrder);

Router.route("/orders/delete_order/:id").delete(deleteOrder);

module.exports = Router;
