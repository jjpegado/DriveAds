const express = require( 'express');
const {listarTodosBrApi,listarPorIdApi,listarDocumentosDb} = require("./controller/listar");
const loginUser = require('./filters/verificarLogin')

const rotas = express();

rotas.get('/', listarDocumentosDb, loginUser);
rotas.get('/forecast/:id', listarPorIdApi, loginUser);

module.exports = rotas;