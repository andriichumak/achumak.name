const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

const extractLESS = new ExtractTextWebpackPlugin('style.css', {
	allChunks: true
});

const isDev = process.argv.indexOf('-p') === -1;
process.env.NODE_ENV = isDev ? 'development' : 'production';

module.exports = {
	context: __dirname,
	entry: ['./index'],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				include: __dirname
			},
			{
				test: /\.less$/,
				loader: isDev ? null : extractLESS.extract([
					'css',
					'postcss',
					'less'
				]),
				loaders: isDev ? ['style', 'css', 'postcss', 'less'] : null
			},
			{
				test: /\.css$/,
				loader: isDev ? null : extractLESS.extract([
					'css'
				]),
				loaders: isDev ? ['style', 'css', 'postcss'] : null
			},
			{ test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" },
			{ test: /\.png$/, loader: "file"}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({
			title: 'Andrii Chumak - Software Engineer',
			favicon: './favicon.ico'
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
	]
};

if (isDev) {
	module.exports.devtool = 'cheap-source-map';
	module.exports.entry.unshift('webpack-hot-middleware/client');
	module.exports.plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	);
} else {
	module.exports.plugins.push(
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		extractLESS,
		new webpack.optimize.DedupePlugin()
	);
}
