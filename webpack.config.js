/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin  = require('html-inline-script-webpack-plugin');
const { spawn } = require('child_process')
const webpack = require('webpack')

const mode = env => env.production ? 'production' : 'development'

const RULES = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [{
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]'
            }
        }]
    }
]
const rendererConfig = (env) => ({
    output: {
        path: path.resolve(__dirname, '.webpack'),
        publicPath:"./"
    },
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    mode: mode(env),
    stats: 'errors-only',
    module: {
        rules: [...RULES, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    entry: {
        renderer: ['./index.tsx']
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            title: "MS-Generator",
            inject:'body'
        }),
        new HtmlInlineScriptPlugin()
    ]
})

module.exports = (env = {}) => [rendererConfig(env)]