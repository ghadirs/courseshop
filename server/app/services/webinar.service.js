const Webinar = require("../models/webinar.model");

exports.createService = async (body, params) => {
  try {
    let query = Webinar.build({
      name: body.name,
      description: body.description,
      startAt: body.startAt,
      finishAt: body.finishAt,
      courseId: body.courseId,
      teacherId: body.teacherId,
      studentsCount: body.studentsCount,
      teacherName: body.teacherName,
      subject: body.subject,
      duration: body.duration,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Webinar.findOne({
      where: {
        webinarId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Webinar.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Webinar.update(
      {
        name: body.name,
        description: body.description,
        startAt: body.startAt,
        finishAt: body.finishAt,
        courseId: body.courseId,
        teacherId: body.teacherId,
        studentsCount: body.studentsCount,
        teacherName: body.teacherName,
        subject: body.subject,
        duration: body.duration,
      },
      {
        where: {
          webinarId: params.id,
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
    let query = Webinar.destroy({
      where: {
        webinarId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
