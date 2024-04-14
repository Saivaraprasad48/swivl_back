const express = require("express");
const router = express.Router();
const { z } = require("zod");
const DiaryEntry = require("../models/DiaryEntry");
const authenticateJWT = require("../controllers/userMiddleware");
const User = require("../models/User");

// Validation schema with Zod
const diaryEntrySchema = z.object({
  title: z.string().min(3), // Minimum length of 3 characters for title
  description: z.string().min(6), // Minimum length of 6 characters for description
  location: z.string(),
});

// Endpoint for creating a new diary entry
router.post("/new-diary", authenticateJWT, async (req, res) => {
  try {
    const { title, description, date, location } = diaryEntrySchema.parse(
      req.body
    );
    const userId = req.user.userId;
    const diaryEntry = new DiaryEntry({
      title,
      description,
      date,
      location,
      user: userId,
    });
    await diaryEntry.save();
    await User.findByIdAndUpdate(
      userId,
      { $push: { diaryEntries: diaryEntry._id } },
      { new: true }
    );
    res
      .status(201)
      .json({ message: "Diary entry created successfully", diaryEntry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Zod validation error
      const errorMessage = error.errors.map((err) => err.message).join("; ");
      return res.status(400).json({ error: errorMessage });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint for getting all diaries
router.get("/user-diaries", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.userId;
    const diaryEntries = await DiaryEntry.find({ user: userId });
    res.status(200).json(diaryEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint for updating a diary entry
router.put("/update-diary/:id", authenticateJWT, async (req, res) => {
  try {
    const { title, description, date, location } = diaryEntrySchema.parse(
      req.body
    );
    const userId = req.user.userId;
    const diaryEntry = await DiaryEntry.findOneAndUpdate(
      { _id: req.params.id, user: userId },
      { title, description, date, location },
      { new: true }
    );
    if (!diaryEntry) {
      return res.status(404).json({ error: "Diary entry not found" });
    }
    res
      .status(200)
      .json({ message: "Diary entry updated successfully", diaryEntry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Zod validation error
      const errorMessage = error.errors.map((err) => err.message).join("; ");
      return res.status(400).json({ error: errorMessage });
    }
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint for deleting a diary entry
router.delete("/remove-diary/:id", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.userId;
    const diaryEntry = await DiaryEntry.findOneAndDelete({
      _id: req.params.id,
      user: userId,
    });
    if (!diaryEntry) {
      return res.status(404).json({ error: "Diary entry not found" });
    }
    res
      .status(200)
      .json({ message: "Diary entry deleted successfully", diaryEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
