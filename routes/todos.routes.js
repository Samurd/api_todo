const { Router } = require("express");
const { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo, createUser } = require("../controllers/todos.controllers")

const router = Router();

// ******* CRUD ******* //


// CREATE TO DO //

router.post('/todos', createTodo)


// READ //

router.get("/todos", getAllTodos)


router.get("/todos/:id", getTodoById)


// UPDATE //

router.put("/todos/:id", updateTodo)


// DELETE //

router.delete("/todos/:id", deleteTodo)

module.exports = router