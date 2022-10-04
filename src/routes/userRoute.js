const express = require("express");
const userController = require("../controller/userController.js");

const userRoute = express.Router();
userRoute.get("/", userController.getInfor);

module.exports = userRoute;
