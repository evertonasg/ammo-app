var app = require('./config/custom-express')();
var server = require('http').createServer(app);
var porta = 3002;

server.listen(porta, () =>
    console.log(`rodando na porta ${porta}...`)
);