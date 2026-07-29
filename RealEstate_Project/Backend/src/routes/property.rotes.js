const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");


// Add Property
router.post("/", authMiddleware, roleMiddleware("agent"), propertyController.addProperty);

// Update Property
router.put("/:id", authMiddleware, roleMiddleware("agent", "admin"), propertyController.updateProperty);

// Delete Property
router.delete("/:id", authMiddleware, roleMiddleware("agent", "admin"), propertyController.deleteProperty);

module.exports = router;