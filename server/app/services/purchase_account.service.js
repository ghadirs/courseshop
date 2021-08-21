const PurchaseAccount = require("../models/purchase_account.model");

exports.createService = async (body, params) => {
  try {
    let query = PurchaseAccount.build({
      billingAddress: body.billingAddress,
      isClosed: body.isClosed,
      open: body.open,
      closed: body.closed,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = PurchaseAccount.findOne({
      where: {
        purchase_accountId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = PurchaseAccount.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = PurchaseAccount.update(
      {
        billingAddress: body.billingAddress,
        isClosed: body.isClosed,
        open: body.open,
        closed: body.closed,
      },
      {
        where: {
          purchase_accountId: params.id,
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
    let query = PurchaseAccount.destroy({
      where: {
        purchase_accountId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
