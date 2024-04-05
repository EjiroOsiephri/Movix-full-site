const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const { Strategy } = require("passport-google-oauth20");
require("dotenv").config();
const app = express();

const dummy_db = [];

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_ACTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(acessToken, refreshToken, profile, done) {
  console.log("User Profile", profile);
  done(null, profile);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware setup
app.use(helmet());
app.use(
  session({
    secret: config.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(AUTH_ACTIONS, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

app.get("/auth/logout", (req, res) => {});

app.get("/", (req, res) => {
  return res.send("Server started");
});

//routes middlewares

app.get("/getUser", (req, res, next) => {
  res.status(200).json({ user: dummy_db });
});

app.post("/register", (req, res, next) => {
  const { username, password } = req.body;

  if ((!username, username.trim().length === 0, !password)) {
    res.status(442).json({
      message: "Invalid input entered check your inputs and try again",
    });
  }

  const createdUser = {
    username,
    password,
  };
  dummy_db.push(createdUser);

  res.status(201).json({
    message: "User created" + username,
  });
});

module.exports = app;
