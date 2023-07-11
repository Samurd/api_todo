const Todos = require("../models/todos.model");
const Users = require("../models/users.model")
const Categories = require("../models/categories.models")

const createTodo = async (req, res) => {
    try {
        const newTodo = req.body
        const todo = await Todos.create(newTodo)

        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}


const getAllTodos = async (req, res) => {
    try {
        const todos = await Todos.findAll({
            include: Users, Categories
        })
        res.json(todos)

    } catch (error) {
        res.status(400).json(error)
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        const to_do = await Todos.findByPk(id, {include: Users, Categories})

        res.json(to_do);

    } catch (error) {
        res.status(400).json(error);
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todoInfo = req.body;

         const todo = await Todos.update(todoInfo, {
            where: {id: id}
        })

        res.status(204).send()

    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        await Todos.destroy({
            where: {id}
        })

        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }
}



module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
}