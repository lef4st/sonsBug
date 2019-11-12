const Som = require('../models/som');

module.exports = {

    async store(req, res){

        let nomeSom = req.body.nome;
        let corSom = req.body.cor;
        let filenameSom = req.file.filename;
        //let filenameSom = 'teste';

        let somJson = {
            nome: nomeSom,
            cor: corSom,
            filename: filenameSom
        }

        const som = await Som.create(somJson);

        return res.json(som);
    },

    async list(req, res){
        const som = await Som.find();

        return res.json(som);
    }
}