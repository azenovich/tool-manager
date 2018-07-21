const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: outputPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: true,
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				exclude: /node_modules/,
				loader: 'file-loader?name=assets/fonts/[name].[ext]'
			},
			{
				test: /\.(jpg|png|ico|gif)$/,
				exclude: /node_modules/,
				loader: 'file-loader?name=assets/images/[name].[ext]'
			}
		]
	}, 
	plugins: [ 
		new HtmlWebpackPlugin({
			favicon: './src/assets/images/react.png',
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()	
	],
	devServer: {
		contentBase: outputPath,
		port: 8888,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: 'localhost'
	}
}

module.exports = webpackConfig;