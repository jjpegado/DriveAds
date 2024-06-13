const express = require( 'express');
const listarApi = require("./controller/listar");

const rotas = express();

rotas.get('/', listarApi);

module.exports = rotas;