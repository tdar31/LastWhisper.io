const router = require("express").Router();
const summonerRoutes = require("./summoner");
const matchDataController = require("./matchdata");
const userCheckController = require("./usercheck");

router.use("/summoner", summonerRoutes);
router.use("/matchData", matchDataController);
router.use("/userCheck", userCheckController);

module.exports = router;
