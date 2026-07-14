const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    proimage : String,
    proname : String,
    prodescription : String,
    proprice : String,
})

const postModel = mongoose.model("post", postSchema)


module.exports = postModel;