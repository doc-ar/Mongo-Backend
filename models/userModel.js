const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
