var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'main'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'use plugin'
        })
    ]
};