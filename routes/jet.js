// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("jet", { title: "Search Results for jet" });
// });

// module.exports = router;

var express = require("express");
const jet_controlers = require("../controllers/jet");
var router = express.Router();

/* GET restaurants */
router.get("/", jet_controlers.jet_view_all_Page);
module.exports = router;