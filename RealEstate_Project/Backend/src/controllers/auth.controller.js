const userModel = require('../models/user.model');
const userSchema = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { use } = require('../routes/auth.routes');
const { json } = require('express');


async function registerUser(req, res) {
    const { name, email, password, phone, role } = req.body;

    const user = await userModel.create({
        name, email, password, phone, role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.status(201), json({
        message: "user created successfully",
        user,
        token
    })
}

module.exports = { registerUser }