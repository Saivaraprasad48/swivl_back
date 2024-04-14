const express = require("express");
const router = express.Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const DiaryEntry = require("../models/DiaryEntry");
const authenticateJWT = require("../controllers/userMiddleware");

// Validation schema with Zod
const registerSchema = z.object({
  username: z.string().min(3), // Minimum length of 3 characters for title
  email: z.string().email(),
  password: z.string().min(6), // Minimum length of 6 characters for password
});

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = registerSchema.parse(req.body);
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Invalid input data" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.issues) {
      // Zod validation error
      const errorMessage = error.issues
        .map((issue) => issue.message)
        .join("; ");
      return res.status(400).json({ error: errorMessage });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found! Register now" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Profile management
router.get("/get-profile", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).populate("diaryEntries");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Username and Password
router.put("/update-profile", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { username, password } = req.body;

    // Find the user
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Update username if provided
    if (username) {
      user.username = username;
    }
    // Save the updated user
    await user.save();
    res
      .status(200)
      .json({ message: "User information updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// delete profile
router.delete("/delete-profile", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.userId;

    // Find and delete all diary entries associated with the user
    await DiaryEntry.deleteMany({ user: userId });

    // Find the user and delete their account
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
