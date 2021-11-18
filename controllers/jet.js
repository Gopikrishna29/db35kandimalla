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

// Handle jet create on POST. 
exports.jet_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jet(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jet_type":"goat", "jet_model":12, "jet_model":"large"} 
    document.jet_type = req.body.jet_type; 
    document.jet_model = req.body.jet_model; 
    document.jet_model = req.body.jet_model; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific jet. 
exports.jet_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jet.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle jet update form on PUT. 
exports.jet_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jet.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.jet_type)  
               toUpdate.jet_type = req.body.jet_type; 
        if(req.body.jet_model) toUpdate.jet_model = req.body.jet_model; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// Handle jet delete on DELETE. 
exports.jet_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await jet.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.jet_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await jet.findById( req.query.id) 
        res.render('jetdetail',  
{ title: 'jet Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a jet. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.jet_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('jetcreate', { title: 'jet Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a jet. 
// query provides the id 
exports.jet_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await jet.findById(req.query.id) 
        res.render('jetupdate', { title: 'jet Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.jet_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await jet.findById(req.query.id) 
        res.render('jetdelete', { title: 'jet Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 