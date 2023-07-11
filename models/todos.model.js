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
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Todos