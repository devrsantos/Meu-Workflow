module.exports = application => {
    application.get('/get', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_get(application, req, res);
    });
}

module.exports = application => {
    application.post('/post', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_post(application, req, res);
    });
}

module.exports = application => {
    application.put('/put', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_put(application, req, res);
    });
}

module.exports = application => {
    application.delete('/delete', (req, res) => {
        application.app.controllers.controller_testes_api.controller_test_delete(application, req, res);
    });
}
