const Property = require("../models/property.model");

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
            images,
            location,
        } = req.body;

        const property = await Property.create({
            title,
            description,
            type,
            bhk,
            area,
            price,
            city,
            locality,
            amenities,
            images,
            location,
            agent: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Property Added Successfully",
            property,
        });

    } catch (error) {
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
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }

        // Only Owner Agent or Admin
        if (
            property.agent.toString() !== req.user._id.toString() &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                success: false,
                message: "Access Denied",
            });
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "Property Updated Successfully",
            property: updatedProperty,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Property
const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property Not Found",
            });
        }

        await property.deleteOne();
        res.status(200).json({
            success: true,
            message: "Property Deleted Successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = { addProperty, updateProperty, deleteProperty, getAllProperties, getPropertyById };