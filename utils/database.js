const { Sequelize } = require("sequelize");

const db = new Sequelize({
    host: "localhost",
    port: 5432,
    database: "todos",
    username: "postgres",
    password: "1205",
    dialect: "postgres"
})


module.exports = db;