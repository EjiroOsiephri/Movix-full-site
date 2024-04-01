const mongoose = require("mongoose");

const registerUserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("register", registerUserSchema);
