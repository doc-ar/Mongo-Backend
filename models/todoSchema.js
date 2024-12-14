const mongoose = require("mongoose");

// Define the User schema
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
