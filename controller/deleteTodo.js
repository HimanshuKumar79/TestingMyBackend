const Todo = require("../model/schema");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      todo: todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error,
      message: "Error while deleting todo",
    });
  }
};
