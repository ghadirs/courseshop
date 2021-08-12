const Teacher = require("../models/teacher.model");

exports.createService = async (body, params) => {
  try {
    let query = Teacher.build({
      userId: body.userId,
      hasCertificated: body.hasCertificated,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Teacher.findOne({
      where: {
        teacherId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Teacher.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Teacher.update(
      {
        userId: body.userId,
        hasCertificated: body.hasCertificated,
      },
      {
        where: {
          teacherId: params.id,
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
    let query = Teacher.destroy({
      where: {
        teacherId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
