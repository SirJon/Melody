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
    catalog: './src/components/catalog.js',
    delivery: './src/components/delivery.js',
    contacts: './src/components/contacts.js',
    quality: './src/components/quality.js',
    WordPress: './src/components/WordPress/WordPress.js',
  },
  output: {
    filename: `js/[name]/${filename('js')}`,
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
        test: /\.(png|jpg|svg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
      {
        test: /\.mp4$/,
        loader: "file-loader",
        options: {
          outputPath: "video"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['src/*'],
    hot: true,
    compress: true,
    port: 7557,
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
      template: './src/html/page/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'catalog.html',
      template: './src/html/page/catalog.html',
      chunks: ['catalog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'delivery.html',
      template: './src/html/page/delivery.html',
      chunks: ['delivery'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/html/page/contacts.html',
      chunks: ['contacts'],
    }),
    new HtmlWebpackPlugin({
      filename: 'quality.html',
      template: './src/html/page/quality.html',
      chunks: ['quality'],
    }),
  );
};