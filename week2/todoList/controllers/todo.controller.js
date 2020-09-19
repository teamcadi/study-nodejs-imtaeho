const todos = require("../database/todo");

module.exports = {
  getTodos: (req, res, next) => {
    const todoList = todos;
    res.status(200).json(todoList);
  },

  addTodo: (req, res, next) => {
    const { title } = req.body;
    const id = todos[todos.length - 1].id + 1;
    const todo = {
      id,
      title,
      date: new Date().getDate(),
      completed: false,
    };
    todos.push(todo);
    res.status(201).json({ success: true });
  },

  removeTodo: (req, res, next) => {
    const id = req.params.id;
    const newTodos = todos.filter((element) => element.id != id);
    todos = newTodos;
    res.status(200).json({ success: true });
  },

  toggleTodo: (req, res, next) => {
    const { id } = req.params;
    todos.forEach((element) => {
      if (element.id == id) element.completed = !element.completed;
    });
    res.status(200).json({ success: true });
  },
};
