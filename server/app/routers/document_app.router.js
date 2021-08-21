const express = require("express");
const Router = express.Router();
// const { checkRole } = require("../auth/checkRole");
const documentApp = require("../controllers/document_app.controller");

Router.route("/document_apps/get/:id").get(documentApp.getDocumentApp);

Router.route("/document_apps/create").post(documentApp.createDocumentApp);

// Router.route("/document_apps/get_all").get(documentApp.getAll);

Router.route("/document_apps/update/:id").put(documentApp.updateDocumentApp);

// Router.route("/document_apps/delete/:id").delete(documentApp.deleteDocumentApp);

module.exports = Router;
