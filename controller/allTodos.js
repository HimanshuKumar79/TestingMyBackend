const Todo = require("../model/schema");

exports.allTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      todos: todos,
      message: "Data fetch successful",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      message: "Error while fetching data",
    });
  }
};
