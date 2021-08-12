const LineItem = require("../models/line_item.model");

exports.createService = async (body, params) => {
  try {
    let query = LineItem.build({
      name: body.name,
      finishAt: body.finishAt,
      startAt: body.startAt,
      studentDidPass: body.studentDidPass,
      score: body.score,
    });
    return await query.save();
  } catch (err) {
    throw err;
  }
};

// exports.getService = async (params) => {
//   try {
//     let query = LineItem.findOne({
//       where: {
//         lineItemId: params.id,
//       },
//     });
//     return await query;
//   } catch (err) {
//     throw err;
//   }
// };

exports.getAllService = async () => {
  try {
    let query = LineItem.findAll();
    return await query;
  } catch (err) {
    throw err;
  }
};

// exports.updateService = async (body, params) => {
//   try {
//     let query = LineItem.update(
//       {
//         name: body.name,
//         finishAt: body.finishAt,
//         startAt: body.startAt,
//         studentDidPass: body.studentDidPass,
//         score: body.score,
//       },
//       {
//         where: {
//           lineItemId: params.id,
//         },
//       }
//     );
//     return await query;
//   } catch (err) {
//     throw err;
//   }
// };

// exports.deleteService = async (params) => {
//   try {
//     let query = LineItem.destroy({
//       where: {
//         lineItemId: params.id,
//       },
//     });
//     return await query;
//   } catch (err) {
//     throw err;
//   }
// };
