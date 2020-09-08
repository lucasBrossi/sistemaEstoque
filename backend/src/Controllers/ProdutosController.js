const Produtos = require('../models/Produtos')

module.exports = {
    async index(req, res){
        const {nome, tipoDeProduto} = req.query


        if(nome){
        const produto = await Produtos.find({nome: {$regex: `.*${nome}*.`}})
            return res.json(produto)
        } else if(tipoDeProduto){
            const produto = await Produtos.find({tipoDeProduto: {$regex: `.*${tipoDeProduto}*.`}})
            return res.json(produto)
        } else {
            return res.status(400).json({error:"Busque um nome de produto ou tipo"})
        }

    },

    async store(req, res) {
        const {nome, contagem, unidadeDeMedida, valorCompra, valorVenda, tipoDeProduto, dataCompra, dataVenda} = req.body
        const {filename} = req.file

        const jaTem = await Produtos.findOne({nome})

        if(jaTem) {
            return res.json({error: "o item ja se encontra cadastrado"})
        }
        const produto = await Produtos.create({
            nome,
            contagem,
            unidadeDeMedida,
            valorCompra,
            valorVenda,
            tipoDeProduto,
            dataCompra,
            dataVenda, 
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
            return res.json(atualizar)
        } else {
            return res.status(404).json({error: "Produto nao encontrado no sistema"})
        }
    }
}