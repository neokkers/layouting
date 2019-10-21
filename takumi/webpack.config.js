const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// const PATHS = {
//   src: path.join(__dirname, "./src"),
//   dist: path.join(__dirname, "./dist"),
//   assets: "assets/"
// };

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
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
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
    }),
    new CopyWebpackPlugin([{ from: `src/fonts`, to: `assets/fonts` }])
  ]
};
