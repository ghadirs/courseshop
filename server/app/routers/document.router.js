const express = require("express");
const Router = express.Router();
const { checkRole } = require("../auth/checkRole");
const document = require("../controllers/document.controller");

Router.route("/documents/get_document/:id").get(document.getDocument);

Router.route("/documents/create_document").post(document.createDocument);

// Router.route("/documents/get_all").get(getAll);

Router.route("/documents/update_document/:id").put(document.updateDocument);

// Router.route("/documents/delete_document/:id").delete(deleteDocument);

module.exports = Router;
