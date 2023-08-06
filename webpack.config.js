/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require('react-refresh-typescript');

const mode = env => env.production ? 'production' : 'development'

const devServer = env => env.production ? {} : {
    devServer: {
        static: {
            directory: path.join(__dirname, '.webpack'),
            watch: false
        },
        devMiddleware: {
            index: true,
            mimeTypes: { phtml: 'text/html' },
            writeToDisk: true,
        },
        watchFiles: ['src'],
        port: 3000,
        open: true
    }
}
const getDevPlugins = env => env.production ? [] : [
    new ReactRefreshWebpackPlugin()
]
const getTsLoaderExtension = env => env.production ? {} : {
    options: {
        getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()]
        }),
        transpileOnly: true
    }
}


const getRules = (env) => [
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
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            ...getTsLoaderExtension(env)
        }
    }
]
const rendererConfig = (env) => ({
    output: {
        path: path.resolve(__dirname, '.webpack'),
        publicPath: "./"
    },
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    mode: mode(env),
    stats: 'errors-only',
    module: {
        rules: getRules(env)
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
            inject: 'body'
        }),
        new HtmlInlineScriptPlugin(),
        ...getDevPlugins(env)
    ],
    ...devServer(env)

})


module.exports = (env = {}, argv) => {
    env = { ...env, production: argv.mode === 'production' }
    return [rendererConfig(env)]
}