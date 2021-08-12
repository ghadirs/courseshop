const express = require("express");
const Router = express.Router();

const {
  getShoppingCard,
  createShoppingCard,
  updateShoppingCard,
  deleteShoppingCard,
  getAll,
} = require("../controllers/shopping_card.controller");

Router.route("/shopping_cards/get_shopping_card/:id").get(getShoppingCard);

Router.route("/shopping_cards/create_shopping_card").post(createShoppingCard);

Router.route("/shopping_cards/get_all").get(getAll);

Router.route("/shopping_cards/update_shopping_card/:id").put(
  updateShoppingCard
);

Router.route("/shopping_cards/delete_shopping_card/:id").delete(
  deleteShoppingCard
);

module.exports = Router;
