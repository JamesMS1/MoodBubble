var path = require('path');

module.exports = {
	entry: './client.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve( './public/js/' )
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
};