const Order = require("../models/order.model");

exports.createService = async (body, params) => {
  try {
    let query = Order.build({
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
    let query = Order.findOne({
      where: {
        orderId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Order.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Order.update(
      {
        price: body.price,
        products: body.products,
      },
      {
        where: {
          orderId: params.id,
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
    let query = Order.destroy({
      where: {
        orderId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
