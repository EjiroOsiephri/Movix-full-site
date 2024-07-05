const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const userRoutes = require("./routes/user-routes");
const profileRoutes = require("./routes/Profile-routes");
const movieRoutes = require("./routes/movie-routes");
const uploadRoutes = require("./routes/upload-routes");

const PORT = 8000 || process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/users", userRoutes, profileRoutes);

app.use("/api/upload", uploadRoutes);
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
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
