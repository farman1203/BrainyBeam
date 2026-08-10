const express = require("express")
const router = express.Router();

const auth = require('../middleware/auth.middleware')
const role = require('../middleware/role.middleware')
const inquiryController = require('../controllers/inquiry.controller')

router.post("/:id", auth, role("buyer"), inquiryController.sendInquiry);
router.get("/buyer", auth, role("buyer"), inquiryController.getBuyerInquiries);
router.get("/agent", auth, role("agent"), inquiryController.getAgentInquiries);
router.put("/:id", auth, role("agent"), inquiryController.updateInquiryStatus);

module.exports = router;
