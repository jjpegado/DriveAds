const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    const auth = getAuth(); // Inicializa a autenticação do Firebase

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Usuário autenticado:', user.uid);
        next();
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(401).send({ message: 'Autenticação falhou' });
    }
};

module.exports = loginUser;