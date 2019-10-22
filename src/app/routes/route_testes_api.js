module.exports = application => {
    application.get('/page_teste_api', (req, res) => {
        res.render('page_teste_api');
    });

    application.get('/page_teste_api/get', (req, res) => {
        application.src.app.controllers.controller_testes_api.controller_test_get(application, req, res);
    });

    application.post('/page_teste_api/post', (req, res) => {
        application.src.app.controllers.controller_testes_api.controller_test_post(application ,req, res);
    });

    application.put('/page_teste_api/put', (req, res) => {
        application.src.app.controllers.controller_testes_api.controller_test_put(application, req, res);
    });

    application.delete('/page_teste_api/delete', (req, res) => {
        application.src.app.controllers.controller_testes_api.controller_test_delete(application, req, res);
    });
}