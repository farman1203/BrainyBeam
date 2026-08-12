const Inquiry = require('../models/inquiry.model')
const Property = require('../models/property.model')

const sendInquiry = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        const already = await Inquiry.findOne({
            buyer: req.user._id,
            property: property._id,
        });

        if (already) {
            return res.status(400).json({
                success: false,
                message: "Inquiry already sent",
            });
        }

        const inquiry = await Inquiry.create({
            buyer: req.user._id,
            property: property._id,
            agent: property.agent,
            message: req.body?.message || "I am interested in this property",
            status: "New",
            statusHistory: [
                {
                    status: "New",
                    changedAt: new Date(),
                },
            ],
        });

        res.status(201).json({
            success: true,
            message: "Inquiry Sent Successfully",
            inquiry
        });

    } catch (error) {
        console.log("SEND INQUIRY ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getAgentInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({
            agent: req.user._id,
        })
            .populate("buyer", "name email phone")
            .populate("property", "title city locality price")
            .sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            inquiries,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getBuyerInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({
            buyer: req.user._id,
        })
            .populate("property", "title city locality price")
            .populate("agent", "name email phone");
        res.status(200).json({
            success: true,
            inquiries,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateInquiryStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatuses = [
            "New",
            "Contacted",
            "Site Visit Scheduled",
            "Negotiation",
            "Closed",
            "Lost",
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status",
            });
        }

        const inquiry = await Inquiry.find({
            _id: id,
            agent: req.user._id,
        });

        if (!inquiry) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        inquiry.status = status;

        inquiry.statusHistory.push({
            status,
            changedAt: new Date(),
        });

        await inquiry.save();

        const updatedInquiry = await Inquiry.findById(inquiry._id)
            .populate("buyer", "name email phone")
            .populate("property", "title city locality price");

        res.status(200).json({
            success: true,
            message: "Lead status updated successfully",
            inquiry: updatedInquiry,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { sendInquiry, getAgentInquiries, getBuyerInquiries, updateInquiryStatus }