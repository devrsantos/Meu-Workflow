const crypto = require('crypto');
const { secretKey } = require('./../info_privates');

const usuario = {
    "nome": "devrsantos",
    "email": "devrsantos@gmail.com",
    "password": "4sLq54sLq54sLq54sLq5"
}

const autenticador = (dadosUsuario, dadosDataBse) => {
    const nome = typeof dadosUsuario.nome === "string" & dadosUsuario.nome.length >= 3 ? dadosUsuario.nome : "undefined";
    const email = typeof dadosUsuario.email === "string" & dadosUsuario.email.length > 10 ? dadosUsuario.email : "undefined";
    const password = typeof dadosUsuario.password === "string" & dadosUsuario.password.length >= 16 ? dadosUsuario.password : "undefined";
    const dados = [nome, email, password].includes("undefined");
    
    if (dados !== true) {
        const password = crypto.createHmac('sha256', secretKey).update(dadosUsuario.password).digest('hex');
        if (password === dadosDataBse.password) {
            // Gera o Token e Armazena no Banco de Dados.    
        }
    } else {
        console.log('Não Autenticado');
    }
}

autenticador(usuario);

module.exports = autenticador;