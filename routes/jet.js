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

/* GET detail jet page */ 
router.get('/detail', jet_controlers.jet_view_one_Page); 

/* GET create jet page */ 
router.get('/create', jet_controlers.jet_create_Page);

/* GET create update page */ 
router.get('/update', jet_controlers.jet_update_Page);

/* GET create jet page */ 
router.get('/delete', jet_controlers.jet_delete_Page);