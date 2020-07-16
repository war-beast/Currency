const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const NODE_ENV = process.env.NODE_ENV || "development";
const isProductionMode = NODE_ENV === "production";
const isDebugMode = NODE_ENV === "development";
// Путь к выходной папке
const bundleFolder = "wwwroot/bundle/";

let configuration = {
	entry: {
		mainPage: "./Src/pages/main/init.js"
	},
	output: {
		filename: "[name].bundle.js",
		publicPath: bundleFolder,
		path: path.resolve(__dirname, "./wwwroot/bundle"),
		chunkFilename: "[name].bundle.js"
	},
	optimization: {
		splitChunks: {
			minSize: 30000,
			maxInitialRequests: Infinity,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "initial",
					enforce: true,
					minChunks: 2,
					priority: -30
				}
			}
		}
	},
	plugins: [
		// new BundleAnalyzerPlugin(), // Откомментить для анализа бандлов
		new VueLoaderPlugin(),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/), // Оставляем только русскую локализацию
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		new CleanWebpackPlugin([bundleFolder])
	],
	resolve: {
		extensions: [".js", ".vue", ".tsx", ".ts", ".json"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			Vue$: "vue/dist/vue.esm.js",

			Main: path.resolve(__dirname, "./Src/pages/main/"),
			Components: path.resolve(__dirname, "./Src/components/"),
			Util: path.resolve(__dirname, "./Src/util/"),
			Models: path.resolve(__dirname, "./Src/models/") //Такие пути к файлам .ts не распознаются компилятором!
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						js: [{ loader: "babel-loader" }]
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				use: ["vue-style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			}
		]
	}
};

module.exports = configuration;