const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["flat", "villa", "plot"],
      required: true,
    },

    bhk: {
      type: Number,
      required: true,
    },

    area: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    locality: {
      type: String,
      required: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    images: [
      {
        type: String,
      },
    ],

    location: {
      lat: Number,
      lng: Number,
    },

    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);