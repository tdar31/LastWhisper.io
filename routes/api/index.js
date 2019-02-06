const router = require("express").Router();
const summonerRoutes = require("./summoner");

router.use("/summoner", summonerRoutes);

module.exports = router;
