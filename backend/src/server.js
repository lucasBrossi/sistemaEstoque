const express = require('express')

const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const routes = require('./routes')
const http = require('http')
const app = express()
const porta = 3335

const server = http.Server(app)

mongoose.connect('mongodb+srv://lucas:lucas@testelucas.cdvzj.mongodb.net/estoque?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, "..", "uploads")))
app.use(routes)

server.listen(porta, ()=>console.log("o server esta rodando na porta ", porta))