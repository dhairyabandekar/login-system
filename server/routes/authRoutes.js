const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getProfile } = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

//Register Route
router.post("/register", registerUser);

//Login Route
router.post("/login", loginUser);

//Get Profile Route
router.get("/profile", authMiddleware, getProfile);

module.exports = router;