const merge = require('webpack-merge');

const { DefinePlugin } = require('webpack');

const commonConfig = require('./webpack.common');

const configureDefinePlugin = () => ({
    'process.env.NODE_ENV': JSON.stringify('development')
});

const devConfig = () => ({
    plugins: [new DefinePlugin(configureDefinePlugin())]
});

module.exports = merge(commonConfig(), devConfig());
