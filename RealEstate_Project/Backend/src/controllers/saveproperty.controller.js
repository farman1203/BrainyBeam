const SavedProperty = require('../models/save.model');

//saved property
const SaveProperty = async (req, res) => {
    const existing = await SavedProperty.findOne({
        buyer: req.user._id,
        property: req.params.id
    });

    if (existing) {
        await existing.deleteOne();

        return res.json({
            saved: false,
            message: "Removed"
        })
    }

    await SavedProperty.create({
        buyer: req.user._id,
        property: req.params.id
    });

    res.json({
        message: "Saved",
        saved: true
    })
}

//get all saved property
const getSavedProperties = async (req, res) => {
    try {
        const saved = await SavedProperty.find({
            buyer: req.user._id,
        }).populate({
            path: "property",
            populate: {
                path: "agent",
                select: "name email phone",
            },
        });

        const properties = saved.map((item) => item.property);

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
module.exports = { SaveProperty, getSavedProperties}