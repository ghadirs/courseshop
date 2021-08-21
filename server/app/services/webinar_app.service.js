const WebinarApp = require("../models/webinar_app.model");

exports.createService = async (body, params) => {
  try {
    let query = WebinarApp.build({
      teacherId: body.teacherId,
      courseId: body.courseId,
      documentId: body.documentId,
      open: body.open,
      closed: body.closed,
      appStatus: "pending",
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = WebinarApp.findOne({
      where: {
        webinarAppId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = WebinarApp.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = WebinarApp.update(
      {
        teacherId: body.teacherId,
        courseId: body.courseId,
        documentId: body.documentId,
        open: body.open,
        closed: body.closed,
        appStatus: "pending",
      },
      {
        where: {
          webinarAppId: params.id,
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
    let query = WebinarApp.destroy({
      where: {
        webinarAppId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
