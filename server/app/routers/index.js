module.exports = (app) => {
  app.use("/api", require("./course.router"), require("./webinar.router"));
};
