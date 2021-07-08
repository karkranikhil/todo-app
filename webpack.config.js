const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = (env) =>{
    console.log(" Hello there ",env);
    return{
        entry : './src/index.js',
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            publicPath: '/dist/',
            filename: 'bundle.js',
            crossOriginLoading: "use-credentials"
        },
        devServer: {
            contentBase: path.join(__dirname, 'public/'),
            port: 3000,
            publicPath: 'http://localhost:3000/dist/',
            hotOnly: true
        },
        plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()]
    }
}