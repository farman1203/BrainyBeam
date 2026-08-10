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
                "New",
                "Contacted",
                "Site Visit Scheduled",
                "Negotiation",
                "Closed",
                "Lost",
            ],
            default: "New",
        },
        statusHistory: [
            {
                status: {
                    type: String,
                    required: true,
                },
                changedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Inquiry", inquirySchema);