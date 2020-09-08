const Produtos = require('../models/Produtos')

const toLower = String.prototype.toLowerCase

module.exports = {
    async index(req, res){
        const {nome, tipoDeProduto} = req.query

        if(nome){
        const produto = await Produtos.find({nome: {$regex: `.*${toLower(nome)}*.`}})
            return res.json(produto)
        } else if(tipoDeProduto){
            const produto = await Produtos.find({tipoDeProduto: {$regex: `.*${toLower(tipoDeProduto)}*.`}})
            return res.json(produto)
        } else {
            return res.status(400).json({error:"Busque um nome de produto ou tipo"})
        }

    },

    async store(req, res) {
        const {nome, contagem, unidadeDeMedida, valorCompra, valorVenda, tipoDeProduto} = req.body
        const {filename} = req.file

        const jaTem = await Produtos.findOne({nome:toLower(nome)})

        if(jaTem) {
            return res.json({error: "o item ja se encontra cadastrado"})
        }
        const produto = await Produtos.create({
            nome: toLower(nome),
            contagem,
            unidadeDeMedida,
            valorCompra,
            valorVenda,
            tipoDeProduto: loLower(nome),
            foto: filename
        })

        return res.json(produto)
    }, 

    async update(req, res) {
        const { _id } = req.body
        console.log(_id)

        const { atualizacao } = req.body

        const produto = await Produtos.findOne({_id})

        if(produto){
            const {contagem} = produto
            const final = contagem + atualizacao
            const atualizar = await Produtos.updateOne({_id}, {contagem: final})
            return res.json({sucesso: "produto atualizado"}, atualizar)
        } else {
            return res.status(404).json({error: "Produto nao encontrado no sistema"})
        }
    }
}