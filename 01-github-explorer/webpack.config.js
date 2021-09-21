const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

// console.log(path);

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /'node_modules'/,
                use: 'babel-loader' // integracao entre o webpack e o babel-loader
            },
            {
                test: /\.scss$/,
                exclude: /'node_modules'/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // integracao entre o webpack e os style-loader css-loader
            }
        ],
    },
}