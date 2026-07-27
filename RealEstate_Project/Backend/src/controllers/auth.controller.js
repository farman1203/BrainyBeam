const userModel = require('../models/user.model');
const userSchema = require('../models/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


async function registerUser(req, res) {
    const { name, email, password, phone, role } = req.body;


    const ifexistinguser = await userModel.findOne({ email })

    if (ifexistinguser) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name, email, password: hash, phone, role,
    })

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user created successfully",
        user,
    });
}


// const loginuser = (req,res)=>{
//     const {email, password} = req.body;

//     const userdata = await userModel.findOne({email});

//     if(!userdata){
//         return res.status(400).json({
//             message : "Invalid Credentials"
//         })
//     }

//     const 
// }


module.exports = { registerUser }