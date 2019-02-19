const router = require("express").Router();
const summonerRoutes = require("./summoner");
const matchDataController = require("./matchdata");

router.use("/summoner", summonerRoutes);
router.use("/matchData", matchDataController);

module.exports = router;
