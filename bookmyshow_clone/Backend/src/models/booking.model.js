const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  theatre: String,
  timing: String,
  seat: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);