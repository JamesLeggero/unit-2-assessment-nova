const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema ({

})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo