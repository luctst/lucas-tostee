const CleanWebpack = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    output: {
        filename: "main.js"
    },
    plugins: [
        new CleanWebpack( ['dist'] ),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
        ],
    }
};