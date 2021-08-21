const express = require("express");
const Router = express.Router();

const {
  getUserChat,
  createUserChat,
  updateUserChat,
  deleteUserChat,
  getAll,
} = require("../controllers/user_chat.controller");

Router.route("/user_chats/get_user_chat/:id").get(getUserChat);

Router.route("/user_chats/create_user_chat").post(createUserChat);

Router.route("/user_chats/get_all").get(getAll);

Router.route("/user_chats/update_user_chat/:id").put(updateUserChat);

Router.route("/user_chats/delete_user_chat/:id").delete(deleteUserChat);

module.exports = Router;
