const express = require("express");
const Router = express.Router();

const {
  getLineItem,
  createLineItem,
  updateLineItem,
  deleteLineItem,
  getAll,
} = require("../controllers/line_item.controller");

Router.route("/line_items/get_line_item/:id").get(getLineItem);

Router.route("/line_items/create_line_item").post(createLineItem);

Router.route("/line_items/get_all").get(getAll);

Router.route("/line_items/update_line_item/:id").put(updateLineItem);

Router.route("/line_items/delete_line_item/:id").delete(deleteLineItem);

module.exports = Router;
