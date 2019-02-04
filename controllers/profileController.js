// const db = require("../models");
var axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    console.log("FINALL GET TEST");
    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-857f3576-0292-44a1-91f7-23773fea6e35"
      )
      .then(function(res) {
        console.log("res: ", res.data)
        // res
        //   .send(
        //     "Scrape Complete.  Click back and refresh to see the new articles!"
        //   )
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
      });
  },
  findById: function(req, res) {
    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/RiotSchmick?api_key=RGAPI-857f3576-0292-44a1-91f7-23773fea6e35"
      )
      .then(function(res) {
        console.log("res: ", res);
        // res
        //   .send(
        //     "Scrape Complete.  Click back and refresh to see the new articles!"
        //   )
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
      });
  }
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
