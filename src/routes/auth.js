import express from "express";
import * as controller from "../controller";

const auth = express.Router();
auth.post("/", controller.register);

module.exports = auth;
