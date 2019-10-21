module.exports = application => {
    application.get('/page_teste_api', (req, res) => {
        res.render('page_teste_api');
    });
}

module.exports = application => {
    application.get('/page_teste_api/get', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_get(application, req, res);
    });
}

module.exports = application => {
    application.post('/page_teste_api/post', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_post(application, req, res);
    });
}

module.exports = application => {
    application.put('/page_teste_api/put', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_put(application, req, res);
    });
}

module.exports = application => {
    application.delete('/page_teste_api/delete', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_delete(application, req, res);
    });
}
