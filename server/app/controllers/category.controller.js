const {
  createService,
  getAllService,
  getService,
  deleteService,
  updateService,
} = require("../services/category.service");

exports.getCategory = async (req, res) => {
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
    const allCategories = await getAllService();

    const partial = (arr = [], condition) => {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
          result.push(arr[i]);
        }
      }
      return result;
    };

    const findNodes = (parentKey, items) => {
      let subItems = partial(items, (n) => n.dataValues.parent === parentKey); // return console.log(parentKey)
      // console.log(items)
      const result = [];
      for (let i = 0; i < subItems.length; i++) {
        let subItem = subItems[i];
        let resultItem = {
          name: subItem.dataValues.name,
          parent: subItem.dataValues.parent,
          child: subItem.dataValues.child,
        };
        let kids = findNodes(subItem.dataValues.child, items);
        if (kids.length) {
          resultItem.children = kids;
        }
        result.push(resultItem);
      }
      return result;
    };

    res.status(200).json({
      status: "success",
      message: findNodes("root", allCategories),
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
    });
  }
};

exports.createCategory = async (req, res) => {
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

exports.updateCategory = async (req, res) => {
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

exports.deleteCategory = async (req, res) => {
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
