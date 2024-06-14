const express = require( 'express');
const {listarTodosBrApi,
        listarPorIdApi,
        listarDocumentosDb} = require("./controller/listar");

const rotas = express();

rotas.get('/', listarDocumentosDb);
rotas.get('/forecast/:id', listarPorIdApi);

module.exports = rotas;