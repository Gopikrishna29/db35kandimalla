var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jet_controller = require('../controllers/jet'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// JET ROUTES /// 
 
// POST request for creating a Jet.  
router.post('/resource/jets', jet_controller.jet_create_post); 
 
// DELETE request to delete Jet. 
router.delete('/resource/jets/:id', jet_controller.jet_delete); 
 
// PUT request to update Jet. 
router.put('/resource/jets/:id', 
jet_controller.jet_update_put); 
 
// GET request for one Jet. 
router.get('/resource/jets/:id', jet_controller.jet_detail); 
 
// GET request for list of all Jet items. 
router.get('/resource/jets', jet_controller.jet_list); 
 
module.exports = router; 