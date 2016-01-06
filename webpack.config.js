/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

	output: {
		filename:   'main.js',
		publicPath: '/assets/'
	},

	cache:   true,
	debug:   true,
	devtool: false,
	entry:   [
		'webpack/hot/only-dev-server',
		'./src/main.js'
	],

	stats: {
		colors:  true,
		reasons: true
	},

	resolve: {
		extensions: ['', '.js'],
		alias:      {
			'styles':     __dirname + '/src/styles',
			'mixins':     __dirname + '/src/mixins',
			'components': __dirname + '/src/components/'
		}
	},
	module:  {
		preLoaders: [{
			test:    /\.js$/,
			loader:  'jsxhint'
		}],
		loaders:    [{
			test:    /\.js$/,
			exclude: /node_modules/,
			loader:  'react-hot!babel-loader'
		}, {
			test:   /\.scss$/,
			loader: "style!css!sass"
		}, {
			test:   /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test:   /\.(png|jpg|woff|woff2)$/,
			loader: 'url-loader?limit=8192'
		}, {
			test:   /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test:   /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=8192"
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

};
