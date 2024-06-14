const apiKey = require("../apiKey");
const axios =  require('axios');
const db = require('../conexao');
const { collection, getDocs } = require("firebase/firestore");

const listarTodosBrApi = async (req, res) => {
    // const {nome} = req.body
    try {
        const url = `http://apiadvisor.climatempo.com.br//api/v1/locale/city?country=BR&token=${apiKey}`;
    
        const response = await axios.get(url);
        //console.log(response.data)

        res.send(response.data);
        } catch (error) {
        console.error('Ocorreu um erro ao fazer a solicitação:', error);
        res.status(500).send('Ocorreu um erro ao processar a solicitação.');
    }
}

const listarPorIdApi = async (req, res) => {
    const {id} = req.params; // ID João Pessoa = 7364

    //console.log(id)

    if (!id) {
        return res.status(400).send('ID é obrigatório.');
    }

    const url = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${id}/hours/72?token=${apiKey}`;
    try {
    
        const response = await axios.get(url);
        res.send.status(response.data);
        } catch (error) {
            console.error('Ocorreu um erro ao fazer a solicitação:', error.response.data);
            res.status(500).send('Ocorreu um erro ao processar a solicitação.');
        }
}

const listarDocumentosDb = async () => {
    try {
        const usersCollection = collection(db, 'Ads'); // Substitua 'users' pelo nome da sua coleção
        const querySnapshot = await getDocs(usersCollection);
        const documentos = querySnapshot.docs.map(doc => doc.data());
        console.log(documentos);
        return documentos[0]
    } catch (error) {
        console.error('Erro ao listar documentos:', error);
        throw error;
    }
};

module.exports = {
    listarTodosBrApi,
    listarPorIdApi,
    listarDocumentosDb
}
