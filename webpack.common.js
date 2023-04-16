const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "docs"),
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               "style-loader",
               "css-loader",
               "resolve-url-loader",
               {
                  loader: "sass-loader",
                  options: {
                     sourceMap: true,
                  },
               },
            ],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
            generator: {
               filename: "[name].[contenthash][ext]"
            }
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: "index.html",
         template: path.resolve(__dirname, "src/html/index.html"),
      }),
   ],
};
