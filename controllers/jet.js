var jet = require('../models/jet'); 
 
// List of all jets 
exports.jet_list = async function(req, res) { 
    try{ 
        thejets = await jet.find(); 
        res.send(thejets); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.jet_view_all_Page = async function (req, res) {
    try {
        thejets = await jet.find();
        res.render("jet", {
        title: "jet Search Results",
        results: thejets,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific jet. 
exports.jet_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jet detail: ' + req.params.id); 
}; 
 

 
// Handle jet delete form on DELETE. 
exports.jet_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jet delete DELETE ' + req.params.id); 
}; 
 
// Handle jet update form on PUT. 
exports.jet_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jet update PUT' + req.params.id); 
}; 

// Handle Costume create on POST. 
exports.jet_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jet(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jet_type":"goat", "jet_model":12, "cost":"large"} 
    document.jet_type = req.body.jet_type; 
    document.jet_model = req.body.jet_model; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 