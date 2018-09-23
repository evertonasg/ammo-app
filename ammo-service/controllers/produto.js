const logger = require('../servicos/logger.js');

module.exports = function(app){

    //LISTA TODOS OS PRODUTOS
    app.get('/produtos/', (req, res) => {
        
        const connection  = app.persistencia.connectionFactory();
        const produtoDAO  = new app.persistencia.ProdutoDAO(connection);

        produtoDAO.lista((erro, produtos) => {
           
            if(erro){
                logger.error(erro);
                res.status(500).send(erro);
                return;
            }
        
            res.location('/produtos/');

            let response = {
                produtos: produtos,
                links: [
                    {
                        rel: 'self',
                        href: 'http://3002/produtos/',
                        method: 'GET'
                    }
                ]
            };

            logger.info(response);
            res.status(200).send(response);
        });
    });
};