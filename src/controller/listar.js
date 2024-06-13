const apiKey = require("../apiKey");
const axios =  require('axios');

const listarApi = async (req, res) => {
    try {
        const url = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=João Pessoa&state=PB&token=${apiKey}`;
    
        const response = await axios.get(url);
        console.log(response.data)

        res.send(response.data);
        } catch (error) {
        console.error('Ocorreu um erro ao fazer a solicitação:', error);
        res.status(500).send('Ocorreu um erro ao processar a solicitação.');
    }
}

module.exports = listarApi
