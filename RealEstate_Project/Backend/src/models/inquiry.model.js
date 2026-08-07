const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        property: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Property",
            required: true,
        },
        agent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: [
                "new",
                "contacted",
                "site visit scheduled",
                "negotiation",
                "closed",
                "lost",
            ],
            default: "new"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Inquiry", inquirySchema);