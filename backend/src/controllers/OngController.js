/*impotado pois possui um metodo para gerar string aleatória que será utilizada com id da ong*/
const crypto = require('crypto');

/*Importando a conexão com o banco de dados*/
const connection = require('../database/connection');

module.exports = {
    /** 
     *  O request guarda todos os dados que vem através da nossa requisição
     *  O response responsável por retornar uma resposta para o usuário.
     *  Async = declara a função como assincrona
    */
    async index(request, response){
        //SELECT * FROM ongs///
        const ongs = await connection('ongs').select('*');
        //Retorna array com a informação solicitada no SELECT//
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        /*Gerando uma srting aleatória para o id da ONG*/
        const id = crypto.randomBytes(4).toString('HEX');

         /*Conexão com o Bd*/
         await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    }
}