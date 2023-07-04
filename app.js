const express = require('express');
const db = require("./utils/database");
const Todos = require("./models/todos.model")

const app = express();

app.use(express.json());

db.authenticate()
.then(() => {
    console.log("base de datos conectada");
})
.catch(error => console.log(error));

db.sync()
.then(() => console.log("base de datos sincronizada"))

// ******* CRUD ******* //

// CREATE //

app.post('/todos', async (req, res) => {
    try {
        const newTodo = req.body
        const todo = await Todos.create(newTodo)

        res.status(201).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
})


// READ //

app.get("/todos", async (req, res) => {
    try {
        const todos = await Todos.findAll()
        res.json(todos)

    } catch (error) {
        res.status(400).json(error)
    }
})


app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const to_do = await Todos.findByPk(id)

        res.json(to_do);

    } catch (error) {
        res.status(400).json(error);
    }
})


// UPDATE //

app.put("/todos/:id", async (req, res) => {
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
})


// DELETE //

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await Todos.destroy({
            where: {id}
        })

        res.status(204).send()
    } catch (error) {
        res.status(400).json(error);
    }
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(8000, () => {
    console.log("servidor corriendo");
})