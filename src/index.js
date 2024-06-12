import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import express from 'express';
import axios from 'axios';

const apiKeyClimatempo = '3dca354da3b657e99118b8762292b7d0'
const port = 8080
const app = express();

/*
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAx6dpiMxrZR9a5Ffmhqbwig5pCI9xmNUs",
    authDomain: "driveads-bc1ad.firebaseapp.com",
    projectId: "driveads-bc1ad",
    storageBucket: "driveads-bc1ad.appspot.com",
    messagingSenderId: "428426459631",
    appId: "1:428426459631:web:eb58f18c68c1de88289e1a"
})

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('Logged in');
    } else {
        console.log('No user')
    }
})
*/

app.get('/', async (req, res) => {
    try {
      const url = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=João Pessoa&state=PB&token=${apiKeyClimatempo}`;
  
      const response = await axios.get(url);
      res.send(response.data);
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a solicitação:', error);
      res.status(500).send('Ocorreu um erro ao processar a solicitação.');
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
  });

/* TODO: Essa request está retornando um erro, talvez porque tenha excedido o limite
  de execuções diárias da API, é interessante investigar
*/
app.get('/forecast', async (req, res) => {
    try {
      const id = req.query.id; // ID João Pessoa = 7364
  
      if (!id) {
        return res.status(400).send('ID é obrigatório.');
      }
  
      const url = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${id}/hours/72?token=${apiKeyClimatempo}`;
  
      const response = await axios.get(url);
      res.send(response.data);
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a solicitação:', error);
      res.status(500).send('Ocorreu um erro ao processar a solicitação.');
    }
  });
  
  app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
  });
