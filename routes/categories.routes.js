const { Router } = require("express");
const Todos = require("../models/todos.model");

const { createCate, updateCate, deleteCate } = require("../controllers/cate.controllers")

const router = Router();

router.post('/cate', createCate)

router.put('/cate/:id', updateCate)

router.delete('/cate/:id', deleteCate)

module.exports = router

