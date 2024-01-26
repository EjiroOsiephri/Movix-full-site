const fs = require("fs");
const https = require("https");
const helmet = require("helmet");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const { Strategy } = require("passport-google-oauth20");
require("dotenv").config();

const PORT = 8000 || process.env.PORT;
const app = express();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_ACTIONS = {
  callbackURL: "auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(acessToken, refreshToken, profile, done) {
  console.log("User Profile", profile);
  done(null, profile);
}

const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);

//Passport middlewares
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(AUTH_ACTIONS, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

//Middlewares
app.use(helmet());

app.use(
  session({
    secret: config.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => {
  return res.send("Server started");
});

server.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
