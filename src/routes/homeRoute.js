import homeController from "../controller/homeController.js";
import express from "express";

const router = express.Router();

const homeRoute = router.get("/", homeController.getHome);

module.exports = homeRoute;
