const Produtos = require('../models/Produtos')

module.exports = {
    async show(req, res) {
        const { tipoDeProduto } = req.query

        const encontrar = await Produtos.find({tipoDeProduto})

        return res.json(encontrar)
    }
}