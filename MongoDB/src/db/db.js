const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://MongoDB:lOWZAHw3aVK4DKAR@complete-backend.qgemkqe.mongodb.net/db")

    console.log("Connect to db");
    
}


module.exports= connectDB