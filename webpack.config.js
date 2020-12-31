const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3000,
        hot: true,
        https: false
    },
    entry: './src/index.js',
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true }
                        }
                    ]
            },
            {
                test: /\.(ico|png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon: './src/favicon.svg'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/sw.js' },
                { from: 'src/icons/launcher_128.png' },
                { from: 'src/icons/launcher_512.png' },
                { from: 'src/icons/launcher_192.png' },
                { from: 'src/manifest.json' },
                { from: 'src/offline.html' }
            ]
        })
    ]
}