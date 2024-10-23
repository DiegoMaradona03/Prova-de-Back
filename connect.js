// Chamando as dependências
const mysql = require('mysql')

// Configuração da conexão com o Banco de Dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'hoteis'
});

module.exports = {con}