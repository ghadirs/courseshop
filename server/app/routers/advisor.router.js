const express = require("express");
const Router = express.Router();

const {
  getAdvisor,
  createAdvisor,
  updateAdvisor,
  deleteAdvisor,
  getAll,
} = require("../controllers/advisor.controller");

Router.route("/advisors/get_advisor/:id").get(getAdvisor);

Router.route("/advisors/create_advisor").post(createAdvisor);

Router.route("/advisors/get_all").get(getAll);

Router.route("/advisors/update_advisor/:id").put(updateAdvisor);

Router.route("/advisors/delete_advisor/:id").delete(deleteAdvisor);

module.exports = Router;
