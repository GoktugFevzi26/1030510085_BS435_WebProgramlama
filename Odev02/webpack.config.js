const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: './src/kod.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "CardGame"
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({extractComments: false
            })
        ]
    }
}