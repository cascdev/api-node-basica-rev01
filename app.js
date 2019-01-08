// Requires
var express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

// Inicializar variáveis
let app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar rotas
let appRoutes = require('./routes/app');
let usuarioRoutes = require('./routes/usuario');


//************Configuração da conxão do mongoose com o banco de dados***********
const variables = require('./bin/configuration/variables');
// Conexão com base de dados do mongoose, habilita os models e métodos
mongoose.connect(variables.Database.connection,{useMongoClient: true});


// Definir as Rotas que serão usadas na aplicação (As rotas aqui devem estar importadas acima)
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);


app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port} `+ '\x1b[32m%s\x1b[0m', 'online');
});