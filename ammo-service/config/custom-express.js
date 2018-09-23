var express             = require('express');
var cors                = require('cors');
var consign             = require('consign');
var bodyParser          = require('body-parser');

module.exports = () => {
    var app = express();

    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign()
        .include('controllers')
        .then('persistencia')
        .then('servicos')
        .into(app);

    return app;
}