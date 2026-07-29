const User = require("../models/user.model");
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

module.exports = { createAgent };