const router = require("express").Router();
const rankedDataController = require("../../controllers/rankedDataController");
// console.log("INSIDE rankedData ROUTES");

// router.route("/")

router.route("/:id")
.put(rankedDataController.getRankedData)
// .post(rankedDataController.createProfile)
// .get(rankedDataController.saveMatchData)
// .delete(rankedDataController.remove);

module.exports = router;
