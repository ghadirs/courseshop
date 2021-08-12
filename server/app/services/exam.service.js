const Exam = require("../models/exam.model");

exports.createService = async (body, params) => {
  try {
    let query = Exam.build({
      name: body.name,
      finishAt: body.finishAt,
      startAt: body.startAt,
      studentDidPass: body.studentDidPass,
      score: body.score,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Exam.findOne({
      where: {
        examId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Exam.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Exam.update(
      {
        name: body.name,
        finishAt: body.finishAt,
        startAt: body.startAt,
        studentDidPass: body.studentDidPass,
        score: body.score,
      },
      {
        where: {
          examId: params.id,
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
    let query = Exam.destroy({
      where: {
        examId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
