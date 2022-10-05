import express from "express";
import  userController from "../controller/userController.js";

const userRoute = express.Router();
userRoute.get("/", userController.getInfor);

module.exports = userRoute;
