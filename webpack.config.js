var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractTextPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            },{
                test: /\.sass$/,
                use: extractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.html$/,
                use: ['html-loader']
            },{
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractTextPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};