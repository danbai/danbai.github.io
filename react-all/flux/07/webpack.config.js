var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		hot: true
	},
	entry: './src/index.jsx',
	output: {
		path: path.join(__dirname),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			include: path.join(__dirname)
		}, {
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}]
	}
};