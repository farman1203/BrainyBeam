const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const adminController = require("../controllers/admin.controller");

router.post("/create-agent", authMiddleware, roleMiddleware("admin"), adminController.createAgent);

router.get("/agent", authMiddleware, roleMiddleware("admin"), adminController.getAllAgents);

module.exports = router;