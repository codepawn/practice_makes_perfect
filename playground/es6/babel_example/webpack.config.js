var webpack = require("webpack");

module.exports = {
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ], ["normal", "loader"])
    ]
};


var webpack = require('webpack');
module.exports = {
    context: __dirname + "/app/assets/javascripts",
    entry: "./App.js",

    output: {
        filename: "react_bundle.js",
        path: __dirname + "/app/assets/javascripts"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }],
    },
    plugins: [
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
}