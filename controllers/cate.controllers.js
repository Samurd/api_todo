const Todos = require("../models/todos.model");
const Categories = require("../models/categories.models")

const createCate = async (req, res) => {
    try {
        const newCate = req.body
        const cate = await Categories.create(newCate)

        res.status(201).json(cate)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateCate = async (req, res) => {
    try {

        const { id } = req.params
        const cateInfo = req.body
        const cate = await Categories.update(cateInfo, {
            where: {
                id:id
            }
        })

        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}


const deleteCate = async (req, res) => {
    try {
        const {id} = req.params
        await Todos.destroy({
            where: {id}
        })

        res.status(204).send()

    } catch (error) {
        res.status(400).json(error);
    }
}





module.exports = {
    updateCate,
    createCate,
    deleteCate
}