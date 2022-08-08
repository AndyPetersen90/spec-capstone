const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const { seed } = require("./seed.js");
const {
  getAllMovies,
  addMovie,
  getAllWants,
  addToWants,
  addFromWants,
  deleteMovie,
  // apiCall,
  //   addToFavorites,
} = require("./controller");

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

//front end requests//

app.get("/mycollection", getAllMovies);
app.post("/addcollection", addMovie);
app.get("/wants", getAllWants);
app.post("/addtowants", addToWants);
app.post("/fromwants", addFromWants);
app.delete("/deletecollection", deleteMovie);
// app.put("/apisearch", apiCall);
// app.post("/wants", addToFavorites);

//server//
app.post("/seed", seed);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

//Not sure if this is necessary//
app.listen(process.env.PORT || 5005, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
