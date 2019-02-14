const router = require("express").Router();
const summonerController = require("../../controllers/summonerController");
// console.log("INSIDE summoner ROUTES");

router.route("/:username").get(summonerController.findAll);
// .post(booksController.create);

router.route("/:username/:region").get(summonerController.getMatchHistory);
// .put(booksController.update)
// .delete(booksController.remove);

//Need to make a get route to call data but can't pass objects thru to req.body with get requests and need to make at least 10 to start
//Intentionally incorrectly use .put route to allow for this
//Will try and see if there is a better solution but for now ¯\_(ツ)_/¯
router.route("/:username/:region/:matchData").put(summonerController.getMatchData);
// router.route("/:username/:region/:matchData").post(summonerController.getSummonerRankedData);
// .put(booksController.update)
// .delete(booksController.remove);

module.exports = router;
