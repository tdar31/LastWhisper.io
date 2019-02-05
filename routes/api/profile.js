const router = require("express").Router();
const profileController = require("../../controllers/profileController");
console.log("INSIDE PROFILE ROUTES")

// Matches with "/api/books"
router.route("/")
  .get(profileController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(profileController.getMatchHistory)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;
