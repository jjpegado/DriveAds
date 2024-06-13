require('dotenv').config();
const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use(rotas);

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`Servidor em pé na porta ${port}`)
})