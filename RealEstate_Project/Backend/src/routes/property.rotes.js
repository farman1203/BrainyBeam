const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property.controller");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");
const { SaveProperty, getSavedProperties } = require("../controllers/saveproperty.controller");


// Add Property
router.post("/", authMiddleware, roleMiddleware("agent"), propertyController.addProperty);

//get property
router.get("/", authMiddleware, propertyController.getAllProperties);

// Update Property
router.put("/:id", authMiddleware, roleMiddleware("agent", "admin"), propertyController.updateProperty);

// Delete Property
router.delete("/:id", authMiddleware, roleMiddleware("agent", "admin"), propertyController.deleteProperty);

//saved property
router.post("/save/:id", authMiddleware, roleMiddleware("buyer"), SaveProperty);

//get all saved property
router.get("/save", authMiddleware, roleMiddleware("buyer"), getSavedProperties)

//get property by id
router.get("/:id", authMiddleware, propertyController.getPropertyById);

module.exports = router;