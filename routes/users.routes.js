const { Router } = require("express");
const Todos = require("../models/todos.model");

const {  createUser, getAllUsers, getUserById } = require("../controllers/users.controllers")


const router = Router();

// CREATE USER //

router.post('/users', createUser )

// READ //

router.get('/users', getAllUsers )

router.get("/users/:id", getUserById)

module.exports = router