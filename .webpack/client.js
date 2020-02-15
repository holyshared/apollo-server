const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = path.resolve(__dirname, '../');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: {
      "app": path.resolve(`${root}/src/client`, 'app.ts'),
    },
    output: {
      path: path.resolve(__dirname, '../public/assets'),
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['public/assets/js'],
        cleanStaleWebpackAssets: false
      }),      
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    stats: 'errors-only',
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "bundle",
            chunks: "initial"
          }
        }
      }
    }
  }
];