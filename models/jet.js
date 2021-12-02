const mongoose = require("mongoose")
const jetSchema = mongoose.Schema({
    cost: {
        type: Number,
        min: 2,
        max: 1000
    },
    jet_type: {
        type: String,
         minLength: 2,
         maxLength: 4
    },
    jet_model: String


})

module.exports = mongoose.model("jet", jetSchema)
