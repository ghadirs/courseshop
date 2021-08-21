const User = require("../models/user.model");

exports.adminCheck = (req, res, next) => {
  const user = User.findOne({
    where: {
      userId: req.headers.userid,
    },
  });
  if (!user.dataValues) {
    throw new Error("this user does not exists");
  }
  if (
    !roleValidator(user.dataValues.role, { userid: req.headers.userid })
      .dataValues
  ) {
    throw new Error(`you are not ${user.dataValues.role}`);
  }
  next();
};
