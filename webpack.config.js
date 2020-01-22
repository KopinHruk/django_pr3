var path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './frontend/src/index.js',
    module: {   
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    output: {
        path: path.resolve('./frontend/static/frontend/'),
        filename: 'main.js',
    },
};