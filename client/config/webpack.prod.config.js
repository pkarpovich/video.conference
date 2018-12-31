const merge = require('webpack-merge');

const { DefinePlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const settings = require('./webpack.settings');
const commonConfig = require('./webpack.common');

const optimizeBundle = () => ({
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    },
    minimizer: [new UglifyJsPlugin()]
});

const configureDefinePlugin = () => ({
    'process.env.NODE_ENV': JSON.stringify('production')
});

const configureFaviconPlugin = () => ({
    logo: settings.paths.favicon
});

const configureBundleAnalyzer = () => ({
    analyzerMode: 'static',
    reportFilename: 'report.html',
    openAnalyzer: false
});

const prodConfig = () => ({
    optimization: optimizeBundle(),
    plugins: [
        new DefinePlugin(configureDefinePlugin()),
        new ManifestPlugin(),
        new FaviconsWebpackPlugin(configureFaviconPlugin()),
        new BundleAnalyzerPlugin(configureBundleAnalyzer())
    ]
});

module.exports = () => merge(commonConfig(), prodConfig());
