module.exports = (app) => {
  app.use(
    "/api",
    require("./course.router"),
    require("./webinar.router"),
    require("./document.router"),
    require("./user.router"),
    require("./admin.router"),
    require("./teacher.router"),
    require("./advisor.router"),
    require("./customer.router"),
    require("./category.router"),
    require("./approval.router"),
    require("./room.router"),
    require("./exam.router"),
    require("./shopping_card.router"),
    require("./payment.router"),
    require("./order.router"),
    require("./purchase_account.router")
    // require("./line_item.router")
  );
};
