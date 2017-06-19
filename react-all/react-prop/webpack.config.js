var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, './src/index.jsx'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: path.join(__dirname, './src')
        }]
    }
};