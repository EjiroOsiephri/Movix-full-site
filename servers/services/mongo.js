const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("connection succesful");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function mongoConnection() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnection,
  mongoDisconnect,
};
