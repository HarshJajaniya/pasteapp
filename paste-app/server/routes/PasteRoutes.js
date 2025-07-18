const express = require("express");
const router = express.Router();
const Paste = require("../models/Paste");

// Create
router.post("/", async (req, res) => {
  try {
    const paste = new Paste(req.body);
    await paste.save();
    res.status(201).json(paste);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  const pastes = await Paste.find().sort({ createdAt: -1 });
  res.json(pastes);
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    res.json(paste);
  } catch {
    res.status(404).json({ error: "Not found" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const paste = await Paste.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(paste);
  } catch {
    res.status(400).json({ error: "Update failed" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Paste.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
});

module.exports = router;
