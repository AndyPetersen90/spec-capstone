const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();
const { seed } = require("./seed.js");
const {
  getAllMovies,
  addMovie,
  addToWants,
  addFromWants,
  deleteMovie,
  //   addToFavorites,
} = require("./controller");

require("dotenv").config();
app.use(express.json());
app.use(cors());

//front end requests//

app.get("/mycollection", getAllMovies);
app.post("/addcollection", addMovie);
app.post("/wants", addToWants);
// app.post("/wants", addToFavorites);
app.post("/fromwants", addFromWants);
app.delete("/deletecollection/:id", deleteMovie);

//server//
app.post("/seed", seed);

//Not sure if this is necessary//
app.listen(process.env.PORT || 5005, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
