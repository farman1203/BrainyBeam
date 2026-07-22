const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  moviename:String,
  theatre: String,
  timing: String,
  seat: String,
  price:String,
});

module.exports = mongoose.model("Booking", bookingSchema);