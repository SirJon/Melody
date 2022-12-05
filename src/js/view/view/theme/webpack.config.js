const path = require('path');
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';
const isProd = process.env.NODE_ENV == 'production';

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

module.exports = {
  mode: 'development',
  entry: {
    index: './src/components/index.js',
    delivery: './src/components/delivery.js',
    contacts: './src/components/contacts.js',
    galary: './src/components/galary.js',
    WordPress: './src/components/WordPress/WordPress.js',
  },
  output: {
    filename: `js/[name]/${filename('js')}`,
    path: path.resolve(__dirname, isDev ? 'dist' : `theme/assets`)
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin({
      test: /^((?!conf).)*\.js$/,
      extractComments: false,
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
        test: /\.(mp4|webm|mov|avi)$/,
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
    port: 8000,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index.html' },
      ],
    },
  },
};

if (isDev) {
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/html/dist/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'delivery.html',
      template: './src/assets/html/dist/delivery.html',
      chunks: ['delivery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'galary.html',
      template: './src/assets/html/dist/galary.html',
      chunks: ['galary'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/assets/html/dist/contacts.html',
      chunks: ['contacts'],
    }),
  )
};