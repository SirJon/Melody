const path = require('path');
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV == 'development';
const isProd = process.env.NODE_ENV == 'production';

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: `${filename('js')}`,
    path: path.resolve(__dirname, isDev ? 'dist' : `dev`)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin({
      test: /^((?!conf).)*\.js$/,
      extractComments: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "./img",
        },
        {
          from: "./src/favicon.ico",
          to: "./",
        },
        {
          from: "./src/path/to",
          to: "./path/to",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(mp4|webm)$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ["src/*"],
    hot: true,
    compress: true,
    port: 8003,
  },
};

if (isDev) {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'],
    }),
  )
};