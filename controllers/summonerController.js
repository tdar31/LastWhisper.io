// const db = require("../models");
var axios = require("axios");
const { parse, stringify } = require("flatted/cjs");

module.exports = {
  findAll: function(req, res) {
    console.log("FIND ALL // req.params: ", req.params.username)
    axios
      .get(
        "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+req.params.username+"?api_key="+process.env.RITOAPIKEY
      )
      .then(res => {
        return res.data;
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getMatchHistory: function(req, res) {
    console.log("GET MATCH HISTORY // req.params: ", req.params);
    axios
      .get(
        "https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" +
          req.params.username +
          "?api_key="+process.env.RITOAPIKEY
      )
      .then(res => {
        let json = stringify(res.data);
        // console.log(json)
        return json
      })
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        console.log(error);
      });
  }
  //
  //https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/9L5-DLyjjuEFWRp23w1yN8P4YBRAyiVbe02xb7gPyN2WZg?api_key=RGAPI-857f3576-0292-44a1-91f7-23773fea6e35
  //
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
