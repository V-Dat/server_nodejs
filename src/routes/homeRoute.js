const homeController = require("../controller/homeController.js");
const express = require("express");

const router = express.Router();

const homeRoute = router.get("/", homeController.getHome);

module.exports = homeRoute;
