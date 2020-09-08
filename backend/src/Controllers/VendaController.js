const Venda = require('../models/Venda')

module.exports = {
    async index(req, res){
        const { _id, nome, data } = req.body

        const idProduto = _id
        const produto = nome

        if(data){
            const resposta = await Venda.find({dataVenda:data}) 
        } else if(nome){
            const resposta = await Venda.find({produto})
        } else if(_id){
            const resposta = await Venda.find({idProduto})
        }
    }
}