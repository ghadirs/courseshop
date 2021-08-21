const { UUIDV1, UUIDV4 } = require("sequelize/types");
const DocumentApp = require("../models/document_app.model");

exports.createService = async (body) => {
  try {
    let query = DocumentApp.build({
      documentAppId: UUIDV4,
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
    let query = DocumentApp.findOne({
      where: {
        documentAppId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = DocumentApp.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = DocumentApp.update(
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
          documentAppId: params.id,
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
    let query = DocumentApp.destroy({
      where: {
        documentAppId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
