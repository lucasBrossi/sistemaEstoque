const express = require('express')
const multer = require('multer')

const uploadConfig = require('./configs/uploadConfig')
const ProdutosController = require('./Controllers/ProdutosController')
const Dashboard = require('./Controllers/Dashboard')

const routes = express.Router()
const uploads = multer(uploadConfig)

routes.get("/produtos", ProdutosController.index)
routes.post("/produtos", uploads.single("foto"), ProdutosController.store)
routes.put("/produtos", ProdutosController.update)

routes.get("/produtos", Dashboard.show)


module.exports = routes