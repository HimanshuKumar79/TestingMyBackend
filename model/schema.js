const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
    maxLength: 100,
  },
  description: {
    type: "String",
    required: true,
    maxLength: 2000,
  },
  Created_At: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  Updated_At: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
