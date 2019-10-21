const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: `./src/js/`
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }, {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
                   {
                       loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
                   },
                   {
                       loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
                   }
               ]
      }
      // {test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,loader: 'url-loader?limit=10000'}
      // {
      //   test: /\.(ttf|eot|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'fonts/[name].[ext]',
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./assets/[name].css`
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: "index.html",
      filename: "index.html"
    })
  ]
};
