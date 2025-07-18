// server/routes/PasteRoutes.js
const express = require("express");
const router = express.Router();
const Paste = require("../models/Paste");

// Create
router.post("/", async (req, res) => {
  try {
    const paste = new Paste(req.body);
    const saved = await paste.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const pastes = await Paste.find();
    res.json(pastes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read One
router.get("/:id", async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    if (!paste) return res.status(404).json({ message: "Paste not found" });
    res.json(paste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Paste.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete One
router.delete("/:id", async (req, res) => {
  try {
    await Paste.findByIdAndDelete(req.params.id);
    res.json({ message: "Paste deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete All
router.delete("/", async (req, res) => {
  try {
    await Paste.deleteMany({});
    res.json({ message: "All pastes deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
