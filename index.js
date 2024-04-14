const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const userRoutes = require("./routes/UserRoutes");
const diaryEntryRoutes = require("./routes/diaryEntryRoutes");

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/user", userRoutes);
app.use("/diary", diaryEntryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
