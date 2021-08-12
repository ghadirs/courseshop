const express = require("express");
const Router = express.Router();

const {
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  getAll,
} = require("../controllers/room.controller");

Router.route("/rooms/get_room/:id").get(getRoom);

Router.route("/rooms/create_room").post(createRoom);

Router.route("/rooms/get_all").get(getAll);

Router.route("/rooms/update_room/:id").put(updateRoom);

Router.route("/rooms/delete_room/:id").delete(deleteRoom);

module.exports = Router;
