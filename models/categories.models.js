const db = require("../utils/database");
const {Sequelize, DataTypes } = require("sequelize");

const Categories = db.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Categories