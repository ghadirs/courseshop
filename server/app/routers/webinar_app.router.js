const express = require("express");
const Router = express.Router();
// const { checkRole } = require("../auth/checkRole");
const webinarApp = require("../controllers/webinar_app.controller");

Router.route("/webinar_apps/get/:id").get(webinarApp.getWebinarApp);

Router.route("/webinar_apps/create").post(webinarApp.createWebinarApp);

// Router.route("/webinar_apps/get_all").get(webinarApp.getAll);

Router.route("/webinar_apps/update/:id").put(webinarApp.updateWebinarApp);

// Router.route("/webinar_apps/delete/:id").delete(webinarApp.deleteWebinarApp);

module.exports = Router;
