var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("jet", { title: "Search Results for jet" });
});

module.exports = router;