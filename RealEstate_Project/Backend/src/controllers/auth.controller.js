const userModel = require('../models/user.model');
const userSchema = require('../models/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


async function registerUser(req, res) {
    const { name, email, password, phone } = req.body;

    const ifexistinguser = await userModel.findOne({ email })

    if (ifexistinguser) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name, email, password: hash, phone, role: "buyer",
    })

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET)

    res.cookie("token", token)

    const newUser = await userModel.findById(user._id).select("-password");

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        user: newUser
    })
}

const loginuser = async (req, res) => {
    const { email, password } = req.body;

    const userdata = await userModel.findOne({ email });

    if (!userdata) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const ispasswordvalid = await bcrypt.compare(password, userdata.password)

    if (!ispasswordvalid) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: userdata._id,
        role: userdata.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    const user = await userModel.findById(userdata._id).select("-password");

    res.status(200).json({
        success: true,
        message: "Login Success",
        token,
        user
    })
}


module.exports = { registerUser, loginuser }