const db = require("../models");
var axios = require("axios");

module.exports = {
  findByUsername: function(req, res) {
    console.log("findbyusername -> req.body: ", req.body)
    db.Profile.find({
        'profile.dbUsername': req.body.username
    })
    .then(dbProfile => res.json(dbProfile))
    .catch(err => res.status(422).json(err));
  }
};
