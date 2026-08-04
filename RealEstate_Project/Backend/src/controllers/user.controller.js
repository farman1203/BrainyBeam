const User = require('../models/user.model')

//get user 
const getprofile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        res.status(200).json({
            message: "get profile successfully",
            user,
        })
    } catch (error) {
        console.log(error);

    }
}

//update profile agent
const updateProfile = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user._id,
            {
                name, email, phone,
            },
            {
                new: true,
            }
        ).select("-password");

        res.status(200).json({
            message: "profile updtated successfully",
            user,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getprofile,updateProfile};