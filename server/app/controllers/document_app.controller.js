const {
  createService,
  getAllService,
  getService,
  deleteService,
  updateService,
} = require("../services/webinar.service");

exports.getWebinar = async (req, res) => {
  try {
    let query = getService(req.params);
    res.json({
      status: "success",
      message: await query,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    let query = getAllService();
    res.json({
      status: "success",
      message: await query,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err,
    });
  }
};

exports.createWebinar = async (req, res) => {
  try {
    let query = createService(req.body, req.param);
    await query;
    
    res.json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      state: "error",
      message: err,
    });
  }
};

exports.updateWebinar = async (req, res) => {
  try {
    let query = updateService(req.body, req.params);
    await query;
    res.json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      state: "error",
      message: err,
    });
  }
};

exports.deleteWebinar = async (req, res) => {
  try {
    let query = deleteService(req.params);
    await query;
    res.json({
      status: "success",
      message: "done",
    });
  } catch (err) {
    res.json({
      state: "error",
      message: err,
    });
  }
};
