const Payment = require("../models/payment.model");

exports.createService = async (body, params) => {
  try {
    let query = Payment.build({
      totalPrice: body.totalPrice,
      time: body.time,
      paymentResult: body.paymentResult,
      orderId: body.orderId,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Payment.findOne({
      where: {
        paymentId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Payment.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Payment.update(
      {
        totalPrice: body.totalPrice,
        time: body.time,
        paymentResult: body.paymentResult,
        orderId: body.orderId,
      },
      {
        where: {
          paymentId: params.id,
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
    let query = Payment.destroy({
      where: {
        paymentId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
