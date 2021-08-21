const express = require("express");
const Router = express.Router();

// const { customerCheck } = require("../auth/customerCheck");
const {
  getPurchaseAccount,
  createPurchaseAccount,
  updatePurchaseAccount,
  deletePurchaseAccount,
  getAll,
} = require("../controllers/purchase_account.controller");

Router.route("/purchase_accounts/get_purchase_account/:id").get(
  getPurchaseAccount
);

Router.route("/purchase_accounts/create_purchase_account").post(
  createPurchaseAccount
);

Router.route("/purchase_accounts/get_all").get(getAll);

Router.route("/purchase_accounts/update_purchase_account/:id").put(
  updatePurchaseAccount
);

Router.route("/purchase_accounts/delete_purchase_account/:id").delete(
  deletePurchaseAccount
);

module.exports = Router;
