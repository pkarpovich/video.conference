const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devConfig = () => ({});

module.exports = merge(commonConfig(), devConfig());
