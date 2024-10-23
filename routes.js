// Dependências para funcionar
const express = require('express');
const router = express.Router();

const clientes = require('./controllers/clientes');
const telefone = require('./controllers/telefone');
const quartos = require('./controllers/quartos');
const reservas = require('./controllers/reservas');
const estacionamento = require('./controllers/estacionamento');

// Rota (Endpoint) de teste
const teste = (req, res) => {
    res.json("API respondendo com sucesso!");
}

// Rotas para clientes
router.get('/', teste);
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

// Rotas para telefone
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone/:id', telefone.deletar);
// Rotas para quartos
router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);
router.put('/quartos', quartos.update);
router.delete('/quartos/:id', quartos.deletar);

// Rotas para reservas
router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);
router.put('/reservas', reservas.update);
router.delete('/reservas/:id', reservas.deletar);

// Rotas para estacionamento
router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.put('/estacionamento', estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);

module.exports = router;