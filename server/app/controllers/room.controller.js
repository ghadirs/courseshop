const {
  createService,
  getAllService,
  getService,
  deleteService,
  updateService,
} = require("../services/room.service");

exports.getRoom = async (req, res) => {
  try {
    let query = getService(req.params);
    res.status(200).json({
      status: "success",
      message: await query,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    let query = getAllService();
    res.status(200).json({
      status: "success",
      message: await query,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};

exports.createRoom = async (req, res) => {
  try {
    let query = createService(req.body, req.param);
    await query;
    res.status(201).json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    let query = updateService(req.body, req.params);
    await query;
    res.status(200).json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    let query = deleteService(req.params);
    await query;
    res.status(204).json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};
