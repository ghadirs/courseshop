const express = require("express");
const Router = express.Router();

const {
  getWebinar,
  createWebinar,
  updateWebinar,
  deleteWebinar,
  getAll,
} = require("../controllers/webinar.controller");

Router.route("/webinars/get_webinar/:id").get(getWebinar);

Router.route("/webinars/create_webinar").post(createWebinar);

Router.route("/webinars/get_all").get(getAll);

Router.route("/webinars/update_webinar/:id").put(updateWebinar);

Router.route("/webinars/delete_webinar/:id").delete(deleteWebinar);

module.exports = Router;
