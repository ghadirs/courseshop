const ShoppingCard = require("../models/shopping_card.model");

exports.createService = async (body, params) => {
  try {
    let query = ShoppingCard.build({
      price: body.price,
      products: body.products,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = ShoppingCard.findOne({
      where: {
        shoppingCardId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = ShoppingCard.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = ShoppingCard.update(
      {
        price: body.price,
        products: body.products,
      },
      {
        where: {
          shoppingCardId: params.id,
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
    let query = ShoppingCard.destroy({
      where: {
        shoppingCardId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
