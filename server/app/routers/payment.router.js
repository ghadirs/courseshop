const express = require("express");
const Router = express.Router();

// const { customerCheck } = require("../auth/customerCheck");
const {
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
  getAll,
} = require("../controllers/payment.controller");

Router.route("/payments/get_payment/:id").get(getPayment);

Router.route("/payments/create_payment").post(createPayment);

Router.route("/payments/get_all").get(getAll);

Router.route("/payments/update_payment/:id").put(updatePayment);

Router.route("/payments/delete_payment/:id").delete(deletePayment);

module.exports = Router;
