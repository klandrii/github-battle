const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${process.env.npm_package_config_host}:${process.env.npm_package_config_port}`,
        'webpack/hot/only-dev-server',
        './app/index.dev'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modeules/, loaders: "babel-loader"}
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'app'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    }
};
