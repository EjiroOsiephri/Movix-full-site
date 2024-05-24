const HttpError = require("../services/http-error");
const User = require("../services/user");

let existingPassword;

const signupController = async (req, res, next) => {
  const { email, password } = req.body;

  existingPassword = password;

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

  const createdUser = new User({
    email,
    password,
  });

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

  res.status(201).json({ user: createdUser });
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

  if (password !== existingPassword) {
    const err = new HttpError("Password incorrect, enter a valid password");
    return next(err);
  }

  res.status(200).json({ message: "Sign in successful" });
};

module.exports = { signupController, loginController };
