const Property = require("../models/property.model");
const cloudinary = require("../config/cloudinary");
const uploadToCloudinary = require('../config/uploadtoCloudinary')

// Add Property
const addProperty = async (req, res) => {
    try {
        const {
            title,
            description,
            type,
            bhk,
            area,
            price,
            city,
            locality,
            amenities,
            lat,
            lng,
            status,
        } = req.body;

        const images = [];

        // Upload images to Cloudinary
        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const image = await uploadToCloudinary(file);

                images.push(image);
            }
        }

        const property = await Property.create({
            title,
            description,
            type,
            bhk,
            area,
            price,
            city,
            locality,
            amenities: amenities
                ? JSON.parse(amenities)
                : [],
            location: {
                lat,
                lng,
            },
            status,
            images,
            // Logged in agent
            agent: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Property added successfully",
            property,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//getallproperty
const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find()
        agent: req.user._id
        res.status(200).json({
            success: true,
            properties,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//get property by id
const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
            .populate("agent", "name email phone");
        agent: req.user._id
        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }
        res.status(200).json({
            success: true,
            property,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Property
const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found",
            });
        }

        // Only property owner agent can edit
        if (property.agent.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You can only edit your own property",
            });
        }

        // Update normal fields
        property.title = req.body.title;
        property.description = req.body.description;
        property.type = req.body.type;
        property.bhk = req.body.bhk;
        property.area = req.body.area;
        property.price = req.body.price;
        property.city = req.body.city;
        property.locality = req.body.locality;
        property.status = req.body.status;

        property.amenities = req.body.amenities
            ? JSON.parse(req.body.amenities)
            : [];

        property.location = {
            lat: req.body.lat,
            lng: req.body.lng,
        };

        // Existing images which user wants to keep
        const existingImages = req.body.existingImages
            ? JSON.parse(req.body.existingImages)
            : [];

        // Find removed images
        const removedImages = property.images.filter(
            (oldImage) =>
                !existingImages.some(
                    (image) =>
                        image.public_id === oldImage.public_id
                )
        );

        // Delete removed images from Cloudinary
        for (const image of removedImages) {
            await cloudinary.uploader.destroy(
                image.public_id
            );
        }

        // Upload new images
        const newImages = [];

        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const image = await uploadToCloudinary(file);

                newImages.push(image);
            }
        }

        // Old remaining + new images
        property.images = [
            ...existingImages,
            ...newImages,
        ];

        await property.save();

        res.status(200).json({
            success: true,
            message: "Property updated successfully",
            property,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    // Only property owner agent can delete
    if (property.agent.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own property",
      });
    }

    // Delete all images from Cloudinary
    for (const image of property.images) {
      await cloudinary.uploader.destroy(
        image.public_id
      );
    }

    // Delete property from MongoDB
    await Property.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { addProperty, updateProperty, deleteProperty, getAllProperties, getPropertyById };