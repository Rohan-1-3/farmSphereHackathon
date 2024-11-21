const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate emails
  },
  password: {
    type: String,
    required: true,
  },
  isFarmer: {
    type: Boolean,
    default: false, // Default value
  },
});

module.exports = mongoose.model("User", userSchema);
