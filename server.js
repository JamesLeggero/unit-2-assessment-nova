require('dotenv').config()

//ex and mdb setup
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000

//mw
app.use(express.static('public')) //for grabbing/linking css and js
app.use(express.urlencoded({extended : false})) //for req.body
app.set('view engine', 'jsx') //to dictate our VE language
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method')) //to utilize patch, put, delete routes

//db
const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, { useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify : false })
db.once('open', ()=>{
    console.log('mongo connected')
})

const Todo = require('./models/todos')

app.get('/', (req, res)=>{
    Todo.find({}, (err, allTodos)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.render('Index', {
                todos: allTodos
            })
        }
    })
})

app.post('/', (req, res)=>{
    Todo.create(req.body, (err, createdTodo)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.redirect('/')
        }
    })
})

app.delete('/:id', (req, res)=>{
    Todo.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.redirect('/')
        }
    })

})







app.listen(PORT, ()=>{
    console.log('listening')
})