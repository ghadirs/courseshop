const express = require("express");
const Router = express.Router();

const {
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
  getAll,
} = require("../controllers/document.controller");

Router.route("/documents/get_document/:id").get(getDocument);

Router.route("/documents/create_document").post(createDocument);

Router.route("/documents/get_all").get(getAll);

Router.route("/documents/update_document/:id").put(updateDocument);

Router.route("/documents/delete_document/:id").delete(deleteDocument);

module.exports = Router;
