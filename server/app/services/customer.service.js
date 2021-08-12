const Customer = require("../models/customer.model");

exports.createService = async (body, params) => {
  try {
    let query = Customer.build({
      userId: body.userId,
      payments: body.payments,
      shoppingCards: body.shoppingCards,
      orders: body.orders,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Customer.findOne({
      where: {
        customerId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Customer.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Customer.update(
      {
        userId: body.userId,
        payments: body.payments,
        shoppingCards: body.shoppingCards,
        orders: body.orders,
      },
      {
        where: {
          customerId: params.id,
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
    let query = Customer.destroy({
      where: {
        customerId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
