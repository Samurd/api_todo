const db = require("../utils/database");
const {Sequelize, DataTypes } = require("sequelize");


const Todos = db.define('todos', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(90),
        allowNull: true
    },
    completed: {
        type: DataTypes.STRING,
        defaultValue: 'pendiente',
    }
})

module.exports = Todos