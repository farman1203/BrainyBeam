const User = require("../models/user.model");
const Property = require("../models/property.model")
const bcrypt = require("bcryptjs");

const createAgent = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const agent = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role: "agent",
        });

        res.status(201).json({
            success: true,
            message: "Agent Created Successfully",
            agent,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//getallagent
const getAllAgents = async (req, res) => {
    try {
        const agents = await User.find({ role: "agent" })
            .select("-password")
            .sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: agents.length,
            agents,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//getdashboard data
const getDashboard = async (req, res) => {
    try {
        const totalAgents = await User.countDocuments({ role: "agent" });
        const totalBuyers = await User.countDocuments({ role: "buyer" });
        const totalProperties = await Property.countDocuments();

        const agents = await User.find({ role: "agent" })
            .select("-password")
            .sort({ createdAt: -1 })
            .limit(5);

        const recentProperties = await Property.find()
            .populate("agent", "name")
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            stats: {
                totalAgents,
                totalBuyers,
                totalProperties,
                totalLeads: 0,
            },
            agents,
            recentProperties,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


module.exports = { createAgent, getAllAgents, getDashboard };