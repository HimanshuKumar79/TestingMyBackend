const express = require("express");
const { createTodo } = require("../controller/createTodo");
const { allTodos } = require("../controller/allTodos");
const { updateTodo } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const route = express.Router();

route.post("/createTodo", createTodo);
route.get("/allTodos", allTodos);
route.put("/updateTodo/:id", updateTodo);
route.delete("/deleteTodo/:id", deleteTodo);

module.exports = route;
