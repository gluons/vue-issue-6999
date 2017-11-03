import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	],
	devtool: 'source-map'
});
