var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jet_controller = require('../controllers/jet'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/jets', jet_controller.jet_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/jets/:id', jet_controller.jet_delete); 
 
// PUT request to update Costume. 
router.put('/resource/jets/:id', 
jet_controller.jet_update_put); 
 
// GET request for one Costume. 
router.get('/resource/jets/:id', jet_controller.jet_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/jets', jet_controller.jet_list); 
 
module.exports = router; 