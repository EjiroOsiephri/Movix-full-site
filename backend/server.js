const fs = require("fs");
const https = require("https");
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./middlewares/google-auth");

const userRoutes = require("./routes/user-routes");

const PORT = 8000 || process.env.PORT;

const app = express();

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  auth
);

app.use("/api/users", userRoutes);

mongoose
  .connect(
    "mongodb+srv://ejiroosiephri765:EZSSzhMXwRXdnuxA@cluster0.jpwquns.mongodb.net/movix?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server and mongo listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
