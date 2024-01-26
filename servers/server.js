const fs = require("fs");
const https = require("https");
const express = require("express");
const helmet = require("helmet");

const PORT = 8000 || process.env.PORT;
const app = express();

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

//Middlewares

app.use(helmet());

app.get("/", (req, res) => {
  return res.send("Server started");
});

server.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
