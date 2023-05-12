const Todo = require("../model/schema");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      todo: todo,
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
      message: "Erroe while creating todo",
    });
  }
};
