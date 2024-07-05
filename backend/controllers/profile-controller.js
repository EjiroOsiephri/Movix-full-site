const HttpError = require("../services/http-error");
const Profile = require("../services/profile");

const ProfileController = async (req, res) => {
  const { username, description } = req.body;

  if (!username && !description)
    throw new HttpError(
      "Username or bio field cannot be empty, pls enter a valid value",
      404
    );

  const createdUser = new Profile({
    name: username,
    bio: description,
    user: req.userData.userId,
  });

  try {
    await createdUser.save();
  } catch (error) {
    console.log(error);
    throw new HttpError("Error adding new user, database issue", 422);
  }

  res.status(201).json({
    name: username,
    bio: description,
  });
};

const getProfile = async (req, res, next) => {
  console.log(req.userData);
  let profile;
  try {
    profile = await Profile.findOne({ user: req.userData.userId });
  } catch (err) {
    const error = new HttpError(
      "Fetching profile failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!profile) {
    const error = new HttpError(
      "Could not find a profile for the provided user id.",
      404
    );
    return next(error);
  }

  res.json({ profile });
};

module.exports = {
  ProfileController,
  getProfile,
};
