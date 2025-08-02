const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date },
    country: { type: String },
    province: { type: String },
    uplineName: { type: String ,
     
      required: true,
    },
    uplineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      required:true,   },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    cinicNumber: { type: String },
    password: { type: String, required: true },
    // confirmPassword: { type: String }, // <-- Remove this line from the schema
    designation: { type: String, default: "New" },
    points: { type: Number, default: 0 },
    discountPercentage: { type: Number, default: 0, min: 0, max: 100 },
    packageId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
