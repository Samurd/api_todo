const db = require("../utils/database");
const {Sequelize, DataTypes } = require("sequelize");


const Users = db.define('users',{
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports = Users