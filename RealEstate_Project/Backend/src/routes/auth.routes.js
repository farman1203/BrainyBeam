const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const authorize = require('../middleware/role.middleware')

const router = express.Router();


router.post("/register", authController.registerUser)

router.post("/login", authController.loginuser)


router.get('/profile', authMiddleware, (req, res) => {
    res.status(200).json({
        user: req.user
    });
})

router.get('/admin', authMiddleware, authorize("admin"), (req, res) => {
    res.json({
        message: "welcome Admin"
    })
})

module.exports = router;