const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const pasteRoutes = require("./routes/PasteRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Enable CORS for frontend (localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use("/api/pastes", pasteRoutes);

// ✅ Health check route (optional but useful)
app.get("/", (req, res) => {
  res.send("🚀 Paste API is running");
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
