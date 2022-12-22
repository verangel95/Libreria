const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")


const devMode = process.env.NODE_ENV !== "production";



module.exports = {

    entry: "./FrontEnd/app.js",
    output: {
        path: path.join(__dirname, "BackEnd/public"),
        filename: "js/bundle.js"
    },


    module:{

        rules:[
            {
                test: /\.css/,
                use: [
                    devMode ? "style-loader": miniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]



    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./FrontEnd/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new miniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ],

    devtool: "source-map"
}