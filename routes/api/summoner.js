const router = require("express").Router();
const summonerController = require("../../controllers/summonerController");
console.log("INSIDE summoner ROUTES");

router.route("/:username").get(summonerController.findAll);
// .post(booksController.create);

router.route("/:username/:region").get(summonerController.getMatchHistory);
// .put(booksController.update)
// .delete(booksController.remove);

router.route("/:username/:region/:matchData").get(summonerController.getMatchData);
// .put(booksController.update)
// .delete(booksController.remove);

module.exports = router;
