const express = require("express");
const { signupController } = require("../controllers/user-controller");
const { loginController } = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);

module.exports = router;
