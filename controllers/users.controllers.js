const Todos = require("../models/todos.model");
const Users = require("../models/users.model")
const Categories = require("../models/categories.models")

const createUser = async (req, res) => {
    try {
        const newUser = req.body
        const user = await Users.create(newUser)

        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            include: Todos, Categories,
            attributes: {
                exclude: ['password']
            }
        })

        res.json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = Users.findByPk(id, {
            include: Todos, Categories, 
            attributes: {
                exclude: ['password']
            }
        })

        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById
}