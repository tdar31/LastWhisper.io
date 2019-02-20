const db = require("../models");
var axios = require("axios");

module.exports = {
  createProfile: function(req, res) {
    db.Profile.create(req.body.newProfileObj)
      .then(dbProject => res.json(dbProject))
      .catch(err => res.status(422).json(err));
  },
  saveMatchData: function(req, res) {
    console.log("saveMatchData -> req.body: ", req.body.profile)
    db.Profile.findOneAndUpdate(
      { 'profile.accountId': req.body.profile.accountId}, req.body
    )
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  }
};
