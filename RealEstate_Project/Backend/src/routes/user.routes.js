const express = require('express')
const router = express.Router();

const authMiddleware = require('../middleware/auth.middleware')
const userController = require('../controllers/user.controller')

router.get('/profile', authMiddleware, userController.getprofile)

router.put('/profile', authMiddleware, userController.updateProfile)

module.exports = router;