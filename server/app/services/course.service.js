const Course = require("../models/course.model");

exports.createService = async (body, params) => {
  try {
    let query = Course.build({
      name: body.name,
      description: body.description,
      purchaseAt: new Date(),
      content: body.content,
      contentId: body.contentId,
      deliverystatus: body.deliveryStatus,
      producer: body.producer,
      size: body.size,
      language: body.language,
      courseType: body.courseType,
      price: body.price,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Course.findOne({
      where: {
        courseId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Course.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Course.update(
      {
        name: body.name,
        description: body.description,
        purchaseAt: new Date(),
        content: body.content,
        contentId: body.contentId,
        deliverystatus: body.deliveryStatus,
        producer: body.producer,
        size: body.size,
        language: body.language,
        courseType: body.courseType,
        price: body.price,
      },
      {
        where: {
          courseId: params.id,
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
    let query = Course.destroy({
      where: {
        courseId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
