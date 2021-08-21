const User = require("../models/user.model");

exports.createService = async (body, params) => {
  try {
    let query = User.build({
      name: body.name,
      password: body.password,
      email: body.email,
      phone: body.phone,
      address: body.address,
      isLoggedIn: body.isLoggedIn,
      role: body.role,
      accountStatus: body.accountStatus,
      nationalId: body.nationalId,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = User.findOne({
      where: {
        userId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = User.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = User.update(
      {
        name: body.name,
        password: body.password,
        email: body.email,
        phone: body.phone,
        address: body.address,
        loginStatus: body.loginStatus,
        accountStatus: body.accountStatus,
      },
      {
        where: {
          userId: params.id,
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
    let query = User.destroy({
      where: {
        userId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
