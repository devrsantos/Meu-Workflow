const { MongoClient } = require('mongodb');

const parametros = require('./parametros');

const models = {};
models.find = {};
models.insert = {};
models.delete = {};
models.update = {};

models.find.findOne = (dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        const documents = db.parametros.collectionNames._.findOne();

        client.close();
    });
};

models.insert.insertOne = (dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.insertOne(dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

models.insert.insertMany = (dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.insertMany(dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

models.delete.deleteOne = (query, dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.deleteOne(query, dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

models.delete.deleteMany = (query, dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.deleteMany(query, dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

models.update.updateOne = (query, dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.updateOne(query, dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

models.update.updateMany = (query, dados) => {
    MongoClient.connect(parametros.url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(parametros.dbName);
        try {
            db.parametros.collectionNames._.updateOne(query, dados);
        } catch (error) {
            print(error);
        };
        client.close();
    });
};

module.exports = models;
