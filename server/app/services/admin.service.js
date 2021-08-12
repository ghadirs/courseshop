const Admin = require("../models/admin.model");

exports.createService = async (body, params) => {
  try {
    let query = Admin.build({
      userId: body.userId,
      rank: body.rank,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Admin.findOne({
      where: {
        adminId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Admin.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Admin.update(
      {
        userId: body.userId,
        rank: body.rank,
      },
      {
        where: {
          adminId: params.id,
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
    let query = Admin.destroy({
      where: {
        adminId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
