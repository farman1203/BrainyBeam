const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');


const authMiddleware = async (req, res, next) => {
    try {

        // get token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Access Denied"
            });
        }

        // jwt verify
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        //get user from db
        const user = await UserModel.findById(decode.id).select("-password");

        if (!user) {
            return res.status(401).json({
                messgae: "User Not found"
            });
        }

        // Save logged-in user data

        req.user = user;

        console.log(req.user);
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
}


module.exports = authMiddleware;