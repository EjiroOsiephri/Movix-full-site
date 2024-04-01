const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://osiephriejiro765:x3ucWnLWrT4kSm3o@cluster0.lmztfq5.mongodb.net/netflix?retryWrites=true&w=majority";

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
