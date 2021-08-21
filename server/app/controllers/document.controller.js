const documentService = require("../services/document.service");
const documentAppService = require("../services/document_app.service");

exports.getDocument = async (req, res) => {
  try {
    let query = documentService.getService(req.params);
    res.status(200).json({
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

exports.createDocument = async (req, res) => {
  try {
    let query = documentService.createService(req.body, req.param);
    await query;
    documentAppService.createService(req.body, req.params);

    res.status(201).json({
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

exports.getAll = async (req, res) => {
  try {
    let query = documentService.getAllService();
    res.status(200).json({
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

exports.updateDocument = async (req, res) => {
  try {
    let query = documentService.updateService(req.body, req.params);
    await query;
    res.status(200).json({
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

exports.deleteDocument = async (req, res) => {
  try {
    let query = documentService.deleteService(req.params);
    await query;
    res.status(204).json({
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
