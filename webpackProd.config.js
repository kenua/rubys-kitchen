const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: "production",
   entry: "./src/index.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "docs"),
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "Restaurant",
         filename: "index.html",
         template: path.resolve(__dirname, "src/templates/index.ejs"),
      }),
   ],
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
};
