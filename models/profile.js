const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  profile: {},
  matches: [],
  rankedStats: [],
  iterations: Number,
  matchData: [],
  selectedPlayerData: [],
  modal: Boolean,
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
