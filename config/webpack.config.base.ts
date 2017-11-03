import * as webpack from 'webpack';
import { resolve } from 'path';

const baseConfig: webpack.Configuration = {
	entry: resolve(__dirname, '../src/index.ts'),
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, '../dist')
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}
		]
	}
};

export default baseConfig;
