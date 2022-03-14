const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'restaurant page',
         filename: 'index.html',
         template: path.resolve(__dirname, 'src/templates/index.ejs'),
      })
   ],
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ],
    },
};