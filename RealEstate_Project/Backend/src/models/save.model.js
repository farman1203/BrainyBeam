const mongoose = require('mongoose')

const savedSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property"
    }
});

module.exports = mongoose.model("SavedProperty", savedSchema);