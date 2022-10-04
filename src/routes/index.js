const userRoute = require("./userRoute.js");
const homeRoute = require("./homeRoute.js");

const router = (app) => {
  app.use("/infor", userRoute);
  app.use("/", homeRoute);
};

module.exports = router;
