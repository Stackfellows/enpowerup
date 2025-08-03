const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Make sure this line is at the top, before any routes or other modules.

console.log("Environment variables loaded.");
console.log(
  "EMAIL_USER from .env:",
  process.env.EMAIL_USER ? "Loaded" : "Not Loaded (or empty)"
); // Checks if the variable exists and is not empty

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// ✅ Added route to handle root URL
app.get("/", (req, res) => {
  res.send("✅ EnPowerUp API is live and running!");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB error:", err));
