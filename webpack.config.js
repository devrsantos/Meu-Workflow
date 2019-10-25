const path = require('path');

module.exports = {
    mode: 'production',
    devtool: "source-map",
    entry: {
        index: "./src/app/views/public/js/index.js",
        page_teste: "./src/app/views/public/js/page_teste_api.js",
        style: "./src/app/views/public/js/style.js",
        bootstrap: "./src/app/views/public/js/bootstrap.js"
    },
    output: {
        path: path.resolve(__dirname, "./src/app/views/public/js/dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
        ],
    },
}