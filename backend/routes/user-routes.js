const express = require("express");
const { check } = require("express-validator");
const { signupController } = require("../controllers/user-controller");
const { loginController } = require("../controllers/user-controller");
require("dotenv").config();

const router = express.Router();

router.post(
  "/signup",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],

  signupController
);
router.post("/login", loginController);

module.exports = router;
