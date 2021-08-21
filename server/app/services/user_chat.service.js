const UserChat = require("../models/user_chat.model");

exports.createService = async (body, params) => {
  try {
    let query = UserChat.build({
      userChatId: body.userChatId,
      chatId: body.chatId,
      userId: body.userId,
      name: body.name,
      description: body.description,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = UserChat.findOne({
      where: {
        user_chatId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = UserChat.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = UserChat.update(
      {
        billingAddress: body.billingAddress,
        isClosed: body.isClosed,
        open: body.open,
        closed: body.closed,
      },
      {
        where: {
          user_chatId: params.id,
        },
      }
    );
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.deleteService = async (params) => {
  try {
    let query = UserChat.destroy({
      where: {
        user_chatId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
