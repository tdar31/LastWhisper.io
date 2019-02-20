const mongoose = require("mongoose");
const db = require("../models");

//Reset DB with local Data

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fyreggdatabase"
);

const profileSeed = [
  {
    profile: {},
    matches: [],
    rankedStats: [],
    iterations: Number,
    matchData: [],
    selectedPlayerData: [],
    modal: Boolean,
    dbUsername: String
  }
];

db.Profile.remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    console.log(data.result.n + " profileSeed inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
