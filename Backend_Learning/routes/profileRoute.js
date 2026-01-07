const express = require("express");
const { profileController } = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");

const profileRoute = express.Router();

profileRoute.post("/profile",authMiddleware, profileController);

module.exports = profileRoute;