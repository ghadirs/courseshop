const Document = require("../models/document.model");

exports.createService = async (body, params) => {
  try {
    let query = Document.build({
      name: body.name,
      size: body.size,
      courseId: body.courseId,
      duration: body.duration,
      uploadedAt: body.uploadedAt,
      type: body.type,
      subject: body.subject,
      sections: body.sections,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Document.findOne({
      where: {
        documentId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Document.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Document.update(
      {
        name: body.name,
        size: body.size,
        courseId: body.courseId,
        duration: body.duration,
        uploadedAt: body.uploadedAt,
        type: body.type,
        subject: body.subject,
        sections: body.sections,
      },
      {
        where: {
          documentId: params.id,
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
    let query = Document.destroy({
      where: {
        documentId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
