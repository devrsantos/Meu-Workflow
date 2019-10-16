const chave = require('./../../../../info_privates');

const parametros = {
    url: `mongodb://${chave.usuario}:${chave.pass}@${chave.parametros_url}/${chave.dbName}`,
    dbName: `${chave.dbName}`,
    collectionNames: ""
}

module.exports = parametros;
