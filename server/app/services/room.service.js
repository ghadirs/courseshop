const Room = require("../models/room.model");

exports.createService = async (body, params) => {
  try {
    let query = Room.build({
      name: body.name,
      partipicants: body.partipicants,
      description: body.description,
      partipicantsCount: body.partipicantsCount,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

exports.getService = async (params) => {
  try {
    let query = Room.findOne({
      where: {
        roomId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.getAllService = async () => {
  try {
    let query = Room.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

exports.updateService = async (body, params) => {
  try {
    let query = Room.update(
      {
        name: body.name,
        partipicants: body.partipicants,
        description: body.description,
        partipicantsCount: body.partipicantsCount,
      },
      {
        where: {
          roomId: params.id,
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
    let query = Room.destroy({
      where: {
        roomId: params.id,
      },
    });
    return await query;
  } catch (err) {
    throw err;
  }
};
