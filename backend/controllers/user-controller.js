const HttpError = require("../services/http-error");
const User = require("../services/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const signupController = async (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }

  const { email, password } = req.body;

  if (!email && !password) {
    const error = new HttpError("Email or password not valid", 404);
    return next(error);
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
    const err = new HttpError(
      "This user with this email already exists, please login instead",
      422
    );
    return next(err);
  }

  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (error) {
    console.log(error);
    const err = new HttpError("Could not create user, try again", 404);
    return next(err);
  }

  let token;

  const createdUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "super_secret",
      { expiresIn: "1hr" }
    );
  } catch (error) {
    console.log(error);
    const err = new HttpError("Error signing up, please try again later", 500);
    return next(err);
  }

  if (existingUser) {
    return res.status(422).json({
      error: "This user with this email already exists, please login instead",
    });
  }

  try {
    await createdUser.save();
  } catch (error) {
    console.log(error);
    const err = new HttpError("Could not save user, database issue", 422);
    return next(err);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
    const err = new HttpError("Error signing in, please try again later", 422);
    return next(err);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, pls try signing in again",
      422
    );
    return next(error);
  }

  let isPasswordValid = false;

  try {
    isPasswordValid = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    console.log(error);
    const err = new HttpError("Error signing in, pls try again", 422);
    return next(err);
  }

  if (!isPasswordValid) {
    const err = new HttpError(
      "Password incorrect, enter a valid password",
      422
    );
    return next(err);
  }

  let token;

  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "super_secret",
      { expiresIn: "1hr" }
    );
  } catch (error) {
    console.log(error);
    const err = new HttpError("Error trying to login user", 422);
    return next(err);
  }

  res.status(200).json({ message: "Sign in successful" });
};

module.exports = { signupController, loginController };
