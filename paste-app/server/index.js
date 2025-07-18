const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const pasteroute = require("./routes/PasteRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/routes", pasteroute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
