import mongoose from "mongoose";

const registerUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const RegisterUserModel = mongoose.model("register", registerUserSchema);

export default RegisterUserModel;
