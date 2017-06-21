var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: {
            index: 'build/index.html'
        }
    },
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};