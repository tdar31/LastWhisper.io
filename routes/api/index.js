const router = require("express").Router();
const summonerRoutes = require("./summoner");
const matchDataController = require("./matchdata");
const userCheckController = require("./usercheck");
const rankedDataController = require("./rankeddata");

router.use("/summoner", summonerRoutes);
router.use("/matchData", matchDataController);
router.use("/userCheck", userCheckController);
router.use("/rankedData", rankedDataController);

module.exports = router;
