const path = require('path');

module.exports = {
    entry: {
        index: "./src/app/views/public/js/index.js",
        page_teste: "./src/app/views/public/js/page_teste_api.js"
    },
    output: {
        path: path.resolve(__dirname, './src/app/views/public/js/dist'),
        filename: '[name].mim.js'
    }
}