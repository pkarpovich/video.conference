const path = require('path');
const settings = require('./webpack.settings');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const configureEntries = () => {
    let entries = {};

    for (const [key, value] of Object.entries(settings.entries)) {
        entries[key] = path.resolve(__dirname, settings.paths.src.js + value);
    }

    return entries;
};

const configureBabelLoader = () => ({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: []
        }
    }
});

const configureCleanWebpack = () => {
    return {
        root: path.resolve(__dirname, '../../'),
        verbose: true,
        dry: false
    };
};

const configureNotifierPlugin = () => ({
    title: 'Webpack',
    excludeWarnings: true,
    alwaysNotify: true
});

const configureHtmlPlugin = () => ({
    template: path.resolve(__dirname, settings.paths.templates.index),
    filename: './index.html'
});

module.exports = () => ({
    entry: configureEntries(),
    output: {
        path: path.resolve(__dirname, settings.paths.dist.base),
        filename: '[name].bundle.[chunkhash].js'
    },
    module: {
        rules: [configureBabelLoader()]
    },
    plugins: [
        new CleanWebpackPlugin(
            settings.paths.dist.clean,
            configureCleanWebpack()
        ),
        new HtmlWebpackPlugin(configureHtmlPlugin()),
        new WebpackNotifierPlugin(configureNotifierPlugin())
    ]
});
