const db = require("../models");
var axios = require("axios");

module.exports = {
  getRankedData: function(req, res) {
    console.log("GET getRankedData // req.body: ", req.body);
    axios
      .get(
        "https://na1.api.riotgames.com/lol/league/v4/positions/by-summoner/" +
          req.body.username +
          "?api_key=" +
          process.env.RITOAPIKEY
      )
      .then(res => {
        // let json = stringify(res.data);
        // console.log(json)
        return res.data;
      })
      .then(dbModel => res.json(dbModel))
      .catch(error => {
        console.log(error);
      });
  }
};
