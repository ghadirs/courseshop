const Approval = require("../models/approval.model");

exports.createService = async (body, params) => {
  try {
    let query = Approval.build({
      didApprove: body.didApprove,
      teacherId: body.teacherId,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Approval.findOne({
      where: {
        approvalId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Approval.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Approval.update(
      {
        didApprove: body.didApprove,
        teacherId: body.teacherId,
      },
      {
        where: {
          approvalId: params.id,
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
    let query = Approval.destroy({
      where: {
        approvalId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
