const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const pasteRoutes = require("./routes/PasteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://pasteapp-k1wd.vercel.app"]
    : ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/pastes", pasteRoutes); // Example: GET /api/pastes, POST /api/pastes

// MongoDB Connection + Server Start
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT} (${process.env.NODE_ENV})`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
