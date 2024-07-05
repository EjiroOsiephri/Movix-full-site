const express = require("express");
const {
  ProfileController,
  getProfile,
} = require("../controllers/profile-controller");
const checkAuth = require("../middlewares/AuthMiddleware");

const Router = express.Router();

Router.use(checkAuth);

Router.post("/profile", ProfileController);
Router.get("/profile", getProfile);

module.exports = Router;
