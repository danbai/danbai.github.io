const path = require('path');
const webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: APP_PATH
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true
    }
}