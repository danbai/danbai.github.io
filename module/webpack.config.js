var path = require('path');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, './index.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: path.join(__dirname, '')
        }]
    }
};