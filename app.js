const express = require('express');
const db = require("./utils/database");
require("dotenv").config()
const todosRoutes = require("./routes/todos.routes")
const userRoutes = require("./routes/users.routes")
const cateRoutes = require("./routes/categories.routes")
const initModels = require("./models/initModels")
const PORT = process.env.PORT ?? 8000

initModels();

const app = express();

app.use(express.json());
app.use(userRoutes, todosRoutes, cateRoutes);

db.authenticate()
.then(() => {
    console.log("base de datos conectada");
})
.catch(error => console.log(error));

db.sync({force: true})
.then(() => console.log("base de datos sincronizada"))



app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`servidor en el puerto ${PORT}`);
})