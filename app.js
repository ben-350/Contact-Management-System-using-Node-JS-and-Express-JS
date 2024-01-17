//app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Check if the connection is successful
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  // Check for connection errors
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
} catch (error) {
  console.error("Error connecting to MongoDB:", error.message);
}

// Routes
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
