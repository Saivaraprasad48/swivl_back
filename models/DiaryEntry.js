const mongoose = require("mongoose");

// diary schema
const diaryEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const DiaryEntry = mongoose.model("DiaryEntry", diaryEntrySchema);

module.exports = DiaryEntry;
