const Advisor = require("../models/advisor.model");

exports.createService = async (body, params) => {
  try {
    let query = Advisor.build({
      userId: body.userId,
      advisingPrice: body.advisingPrice,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Advisor.findOne({
      where: {
        advisorId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Advisor.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Advisor.update(
      {
        userId: body.userId,
        advisingPrice: body.advisingPrice,
      },
      {
        where: {
          advisorId: params.id,
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
    let query = Advisor.destroy({
      where: {
        advisorId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
