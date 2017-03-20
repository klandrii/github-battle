var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
   template: __dirname + '/app/index.html',
   filename: 'index.html',
   inject: 'body'  
})
module.exports = {
    devtool: 'source-map',
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
   
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modeules/, loaders: "babel-loader"},
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}