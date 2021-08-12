const Category = require("../models/category.model");

exports.createService = async (body, params) => {
  try {
    let query = Category.build({
      name: body.name,
      description: body.description,
      courses: body.courses,
      teachers: body.teachers,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Category.findOne({
      where: {
        categoryId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Category.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Category.update(
      {
        name: body.name,
        description: body.description,
        courses: body.courses,
        teachers: body.teachers,
      },
      {
        where: {
          categoryId: params.id,
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
    let query = Category.destroy({
      where: {
        categoryId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
