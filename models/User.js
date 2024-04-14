const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  diaryEntries: [{ type: mongoose.Schema.Types.ObjectId, ref: "DiaryEntry" }],
});

// saving the user information by hasing password to the database
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

// comparing the user information by hasing password
userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
