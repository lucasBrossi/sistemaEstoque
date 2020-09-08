const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema({
    nome: String,
    contagem: Number,
    unidadeDeMedida: String,
    valorCompra: Number,
    valorVenda: Number,
    tipoDeProduto: String,
    dataCompra: Date,
    dataVenda: Date,
    foto: String
})

module.exports = mongoose.model("Produtos", ProdutosSchema)