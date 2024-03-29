const fs = require("fs");
const app = require("./app");
const https = require("https");
const { mongoConnection } = require("./services/mongo");
const { mongoDisconnect } = require("./services/mongo");

const PORT = 8000 || process.env.PORT;

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

const startHttpsServer = async () => {
  await mongoConnection();

  await mongoDisconnect;

  server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
  });
};

startHttpsServer();
