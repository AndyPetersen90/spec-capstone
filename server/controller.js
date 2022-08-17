require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  apiCall: async (req, res) => {
    let search = req.params.search;
    // console.log(search);

    if (search) {
      const options = {
        method: "GET",
        url: "https://movie-database-alternative.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key":
            process.env.REACT_APP_RAPID_API_KEY || process.env.HEROKU_KEY,
          "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
        },
        params: { s: search, r: "json", page: "1" },
      };

      await axios
        .request(options)
        .then(function (response) {
          // setData(response.data.Search);
          // console.log(response.data.Search);
          res.status(200).send(response.data.Search);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },

  getAllMovies: (req, res) => {
    sequelize
      .query(`SELECT * FROM movie_table`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addMovie: async (req, res) => {
    const { imdbID } = req.body.id;

    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: `${imdbID}` },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };
    let movieInfo;

    await axios
      .request(options)
      .then(async function (apiRes) {
        const { Title, Poster, Genre, Actors, Rated, Year } = apiRes.data;
        const title = Title.replaceAll("'", "''");
        const poster = Poster.replaceAll("'", "''");
        const genre = Genre.replaceAll("'", "''");
        const actors = Actors.replaceAll("'", "''");
        const rated = Rated.replaceAll("'", "''");
        const year = Year.replaceAll("'", "''");

        await sequelize
          .query(
            `
        insert into movie_table (movie_title, movie_poster, movie_genre, movie_actors, movie_rating, movie_year)
          values ('${title}', '${poster}', '${genre}', '${actors}', '${rated}', '${year}');
        `
          )
          .then((dbRes) => {
            console.log(dbRes);
            movieInfo = dbRes[0];
            console.log("successful");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
    if (movieInfo) {
      res.status(200).send("Movie was successfully added.");
    } else {
      res.status(500).send("Problem adding movie.");
    }
  },

  getAllWants: (req, res) => {
    sequelize
      .query(`SELECT * FROM movie_wants`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // addToFavorites: (req, res) => {}, feature to add later.
  addToWants: (req, res) => {
    console.log(req.body.id);
    const { Title, Poster, Year, imdbID } = req.body.id;
    const title = Title.replaceAll("'", "''");
    const poster = Poster.replaceAll("'", "''");
    const year = Year.replaceAll("'", "''");

    sequelize
      .query(
        `
      insert into movie_wants (movie_title, movie_poster, movie_year, imdbID)
        values ('${title}', '${poster}', '${year}', '${imdbID}')

      ` //add the delete request after the insert request.
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addFromWants: async (req, res) => {
    console.log("******", req.body.id, "******");
    const { imdbid } = req.body.id;

    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: `${imdbid}` },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };
    let movieInfo;
    await axios
      .request(options)
      .then(async function (apiRes) {
        console.log("$$$$$$$", apiRes.data, "$$$$$$$");
        const { Title, Poster, Genre, Actors, Rated, Year, imdbID } =
          apiRes.data;
        const title = Title.replaceAll("'", "''");
        const poster = Poster.replaceAll("'", "''");
        const genre = Genre.replaceAll("'", "''");
        const actors = Actors.replaceAll("'", "''");
        const rated = Rated.replaceAll("'", "''");
        const year = Year.replaceAll("'", "''");
        await sequelize
          .query(
            `
        insert into movie_table (movie_title, movie_poster, movie_genre, movie_actors, movie_rating, movie_year)
          values ('${title}', '${poster}', '${genre}', '${actors}', '${rated}', '${year}');

        delete 
        FROM movie_wants
        WHERE imdbID = '${imdbID}';
        `
          )
          .then((dbRes) => {
            console.log(dbRes);
            movieInfo = dbRes[0];
            console.log("successful");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
    if (movieInfo) {
      res.status(200).send("Movie was successfully added.");
    } else {
      res.status(500).send("Problem adding movie.");
    }
  },

  deleteMovie: (req, res) => {
    // console.log("--------------", req.body.id, "--------------");
    const { movie_id } = req.body.id;
    // console.log("--------------", movie_id, "--------------");
    sequelize
      .query(
        `DELETE FROM movie_table
          WHERE movie_id = ${movie_id};
        `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
