import * as merge from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
	entry: resolve(__dirname, '../dev/main.ts'),
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../dev/index.ejs'),
			inject: 'body',
			title: 'Vue + TypeScript'
		})
	],
	devtool: 'eval-source-map'
});
