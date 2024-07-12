const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const profileRoutes = require("./routes/Profile-routes");
const movieRoutes = require("./routes/movie-routes");
const uploadRoutes = require("./routes/upload-routes");

const PORT = 8000 || process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("dev"));

app.use("/api/users", userRoutes, profileRoutes);

app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", movieRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(
    "mongodb+srv://ejiroosiephri765:EZSSzhMXwRXdnuxA@cluster0.jpwquns.mongodb.net/movix?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server and mongo listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
