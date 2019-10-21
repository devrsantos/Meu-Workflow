module.exports.controller_test_get = (application, req, res) => {
    application.app.models.model_testes_api.model_test_get(req, res);
};

module.exports.controller_test_post = (application, req, res) => {
    application.app.models.model_testes_api.model_test_post(req, res);
};

module.exports.controller_test_put = (application, req, res) => {
    application.app.models.model_testes_api.model_test_put(req, res);
};

module.exports.controller_test_delete = (application, req, res) => {
    application.app.models.model_testes_api.model_test_delete(req, res);
};