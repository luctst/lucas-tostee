const CleanWebpack = require("clean-webpack-plugin");
const WebpackHtml = require("html-webpack-plugin");

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
        new CleanWebpack( ['dist'] ),
    ],
    module: {
        rules: [
            {
                test: /\main.scss/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    }
};