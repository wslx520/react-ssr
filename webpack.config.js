const path = require('path');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const ExtractPlugin = require('extract-text-webpack-plugin');

let browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: 'transform-object-rest-spread'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'true'
        }),
        new ExtractPlugin('/public/[name].css')
    ],
    mode: 'development'
};

let serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: 'transform-object-rest-spread'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'false'
        })
    ],
    mode: 'development'
}

module.exports = [browserConfig, serverConfig]