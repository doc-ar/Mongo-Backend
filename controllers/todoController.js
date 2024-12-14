const Todo = require("../models/todoSchema.js");

exports.createTodo = async (req, res) => {
  const { todo, completed } = req.body;
  try {
    const newTodo = new Todo({ todo, completed });
    await newTodo.save();
    res.status(201).json({
      message: "Todo created successfully",
      todo: newTodo
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating todos",
      error: error.message
    });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching todos",
      error: error.message
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching todo",
        error: error.message
      });
  }
};

exports.updateTodo = async (req, res) => {
  const { todo, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo, completed });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({
      message: "Todo updated successfully",
      todo: updatedTodo
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating todo",
      error: error.message
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({
      message: "Todo deleted successfully",
      todo: deletedTodo
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting todo",
      error: error.message
    });
  }
};
