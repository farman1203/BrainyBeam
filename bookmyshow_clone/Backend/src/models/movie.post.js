const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    image : String,
    name : String,
    date : String,
    location : String,
    action : String,
    language : String
})


const movieModel = mongoose.model("movie",movieSchema)

module.exports=movieModel;