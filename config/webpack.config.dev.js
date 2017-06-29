const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./src/index.jsx"
  },
  output: {
    path: __dirname + "/../build",
    filename: "static/js/[name].[hash:8].js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          configFile: "./.eslintrc.json"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
      }
    ]
  },
  plugins: [
    // automatically inject <script> tag into HTML for webpack bundle file
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    modules: true,
    reasons: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devtool: 'source-map',
  devServer: {
    port: 9000,
    compress: true,
    contentBase: __dirname + '../build',
    watchContentBase: true,
    hot: true
  }
};
