const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date },
    country: { type: String },
    province: { type: String },
    uplineName: { type: String, required: true },
    uplineId: {
      type: String, // ✅ Changed from ObjectId to String
      required: true,
    },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    cinicNumber: { type: String },
    password: { type: String, required: true },
    // confirmPassword: { type: String }, // <-- already commented
    designation: { type: String, default: "New" },
    points: { type: Number, default: 0 },
    discountPercentage: { type: Number, default: 0, min: 0, max: 100 },
    packageId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
