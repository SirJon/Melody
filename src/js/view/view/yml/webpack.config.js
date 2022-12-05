const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV == 'development';
const isProd = process.env.NODE_ENV == 'production';

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

module.exports = {
  entry: {
    index: './src/components/index.js',
    delivery: './src/components/delivery.js',
    contacts: './src/components/contacts.js',
    catalog: './src/components/catalog.js',
    WordPress: './src/components/WordPress.js',
  },
  output: {
    filename: `[name]/${filename('js')}`,
    path: path.resolve(__dirname, isDev ? 'dist' : 'theme/assets'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin({
      test:/^((?!conf).)*\.js$/,
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
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
    port: 8080, 
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index.html' },
      ],
    },
  },
};

if (isDev){
  module.exports.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/html/dist/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'delivery.html',
      template: './src/html/dist/delivery.html',
      chunks: ['delivery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/html/dist/catalog.html',
      chunks: ['catalog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/html/dist/contacts.html',
      chunks: ['contacts'],
    }),
  )
};