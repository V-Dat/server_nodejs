import userRoute from "./userRoute.js";
import homeRoute from "./homeRoute.js";
import auth from "./auth.js";

const router = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/user-infor", userRoute);
  app.use("/", homeRoute);
};

module.exports = router;
