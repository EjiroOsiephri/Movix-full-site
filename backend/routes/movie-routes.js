const GetMovieDataFromApi = require("../controllers/movie-controller");
const express = require("express");

const Router = express.Router();

Router.get("/movies", GetMovieDataFromApi);

module.exports = Router;
