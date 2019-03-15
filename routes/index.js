const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// console.log("INSIDE indexjsAPI FOLDER")

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client", "build", "index.html"));
// });

// router.use('/*', function(req, res) {
//   console.log(path.join(__dirname + '/client', 'build', 'index.html'));
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// })

module.exports = router;
