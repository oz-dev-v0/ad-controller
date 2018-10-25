const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {

  const IS_PRODCUTION = argv.mode === 'production';

  return {
    devtool: IS_PRODCUTION ? 'none' : 'source-map',
    entry: {
      'adcontroller':['./src/init.js'],
    },
    output: {
      path: IS_PRODCUTION ? path.join(__dirname, 'build') : path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      minimizer: IS_PRODCUTION ? [
      //production mode
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            },
            mangle: true,
            toplevel: true,
            keep_fnames: false,
            ie8 : true,
          }
        })
      ] : [
      //dev mode
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: true,
            mangle: true,
            toplevel: true,
            keep_fnames: false,
            ie8 : true,
          }
        })
      ]
    }
  };
};