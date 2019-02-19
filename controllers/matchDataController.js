const db = require("../models");
var axios = require("axios");

module.exports = {
  createProfile: function(req, res) {
    db.Profile.create(req.body.newProfileObj)
    .then(dbProject => res.json(dbProject))
    .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {

  }
};
