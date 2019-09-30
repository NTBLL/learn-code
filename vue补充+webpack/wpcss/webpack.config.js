const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack")
module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.jpg$/i,
                // use: ['file-loader'] //,options:{limit:8*1024}
                use: [{loader:'url-loader'}]
            },
            {
                test: /\.(eot|svg|ttf|woff)$/i,
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8888,
        open: true,
        hot: true
    }


};

// ,
// {
//     test: /\.js$/,
//         exclude: /node_modules/,
//     loader: "babel-loader"
// }