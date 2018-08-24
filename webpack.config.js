const CleanWebpack = require("clean-webpack-plugin");
const WebpackHtml = require("html-webpack-plugin");
const ExtractCss = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: "./src/script.js",
    output: {
        filename: "main.js"
    },
    devServer: {
        contentBase: "dist/"
    },
    plugins: [
        new WebpackHtml( {
            template: "./src/index.html"
        } ),
        new CleanWebpack(['dist']),
        new ExtractCss( {
            filename: "main.css"
        } ),
    ],
    module: {
        rules: [
            {
                test: /\main.scss$/,
                use: [ExtractCss.loader, "css-loader", "sass-loader"]
            }
        ],
    }
};