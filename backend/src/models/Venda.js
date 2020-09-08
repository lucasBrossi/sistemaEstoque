const mongoose = require('mongoose')

const VendaSchema = new mongoose.Schema({
    idProduto: String,
    produto: String,
    dataVenda: Date,
    contagemVenda: Number,
    valorTotal: Number,
    clienteDoc: Number
})

module.exports = mongoose.model("Venda", VendaSchema)