var path = require('path');

module.exports = {
	entry: './client.js',
	output: {
		filename: 'build.js',
		path: path.resolve( './public/js/' )
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','react']
				}
			}
		]
	}
};