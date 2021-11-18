const mongoose = require("mongoose") 
const jetSchema = mongoose.Schema({ 
jet_type: String, 
jet_model: String, 
cost: Number 
}) 
 
module.exports = mongoose.model("jet",jetSchema) 
