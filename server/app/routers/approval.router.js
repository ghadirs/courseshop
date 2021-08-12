const express = require("express");
const Router = express.Router();

const {
  getApproval,
  createApproval,
  updateApproval,
  deleteApproval,
  getAll,
} = require("../controllers/approval.controller");

Router.route("/approvals/get_approval/:id").get(getApproval);

Router.route("/approvals/create_approval").post(createApproval);

Router.route("/approvals/get_all").get(getAll);

Router.route("/approvals/update_approval/:id").put(updateApproval);

Router.route("/approvals/delete_approval/:id").delete(deleteApproval);

module.exports = Router;
