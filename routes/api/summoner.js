const router = require("express").Router();
const summonerController = require("../../controllers/summonerController");
console.log("INSIDE summoner ROUTES")

// Matches with "/api/summoner"
router.route("/:username/:region")
  .get(summonerController.findAll)
  // .post(booksController.create);

// Matches with "/api/summoner/:id"
router
  .route("/:username/:region/:theme")
  .get(summonerController.getMatchHistory)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
