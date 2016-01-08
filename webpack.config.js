/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
// path module used to resolve absolute paths
var path = require('path');

module.exports = {

	output: {
		filename:   'main.js',
		publicPath: '/assets/'
	},

	cache:   true,
	debug:   true,
	devtool: false,
	entry:   './src/main.js',

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
		loaders:    [
			// compile all javascript files using the babel-loader module
			{
				test:    /\.js$/,
				exclude: /node_modules/,
				loader:  'babel-loader',
				query: {
          presets: ['es2015','react'],
					cacheDirectory: true
        }
			},
			// compile sass files using the sass-loader module
      // stored in the compiled javascript file
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      // compile css files using the css-loader module
      // stored in the compiled javascript file
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer']
      },
			// compile local images
      // hash file names to prevent cacheing
      // copy into 'img' sub-directory
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]'
      },
			{
				test:   /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&minetype=application/font-woff"
			},
			{
				test:   /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=8192"
			}
		]
	}

};
