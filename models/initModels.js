const Todos = require("./todos.model")
const Users = require("./users.model")
const Categories = require("./categories.models")

const initModels = () => {
    Categories.hasMany(Todos, {foreignKey: 'category_id'})
    Todos.hasOne(Categories, {foreignKey: 'category_id'})
    Users.hasMany(Todos, {foreignKey: 'user_id'})
    Todos.belongsTo(Users, {foreignKey: 'user_id'})
}

module.exports = initModels;