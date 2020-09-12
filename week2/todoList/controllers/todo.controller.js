const todos = require("../database/todo");

module.exports = {
  getTodos: (req, res, next) => {
    const todoList = todos;
    res.status(200).json(todoList);
  },
  addTodo: (req, res, next) => {},
  removeTodo: (req, res, next) => {
    req.params;
  },
  toggleTodo: (req, res, next) => {
    req.params;
  },
};
