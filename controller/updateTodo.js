const Todo = require("../model/schema");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description }
    );
    res.status(200).json({
      success: true,
      updatedTodo: todo,
      message: "Data updated successful",
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      error: error.message,
      message: "Something went wrong",
    });
  }
};
