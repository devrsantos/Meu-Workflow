const { MongoClient } = require('mongodb');

const parametros = require('./parametros');

const fn_mongo = (fn, query = {}, dados = {}) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        
        if (fn == 'findOne') {
            const db = client.db(parametros.dbName);
            const documents = db.parametros.collectionNames._.findOne(dados);
            client.close();
        }

        if (fn == 'insertOne') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.insertOne(dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }

        if (fn == 'insertMany') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.insertMany(dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }

        if (fn == 'deleteOne') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.deleteOne(query, dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }

        if (fn == 'deleteMany') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.deleteMany(query, dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }

        if (fn == 'updateOne') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.updateOne(query, dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }

        if (fn == 'updateMany') {
            const db = client.db(parametros.dbName);
            try {
                db.parametros.collectionNames._.updateOne(query, dados);
            } catch (error) {
                print(error);
            };
            client.close();
        }
    });
};

module.exports = fn_mongo;
