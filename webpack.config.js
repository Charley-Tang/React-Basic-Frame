const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, './src'),
        filename: 'main.js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/i,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(gif|png|jpg|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 80,
        contentBase: path.join(__dirname, './src'),
        historyApiFallback: true,
        proxy: {
            "/testFE/*": "http://localhost:8080"
        }
    },
    devtool: 'cheap-module-eval-source-map'
};