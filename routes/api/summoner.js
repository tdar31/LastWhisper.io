const router = require("express").Router();
const summonerController = require("../../controllers/summonerController");
console.log("INSIDE PROFILE ROUTES")

// Matches with "/api/summoner"
router.route("/")
  .get(summonerController.findAll)
  // .post(booksController.create);

// Matches with "/api/summoner/:id"
router
  .route("/:id")
  .get(summonerController.getMatchHistory)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
