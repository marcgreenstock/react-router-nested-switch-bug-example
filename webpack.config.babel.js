'use strict'

import path from 'path'

export default {
  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/entry.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }],
      exclude: [/node_modules/]
    }]
  },
  devServer: {
    inline: false,
    historyApiFallback: {
      index: '/index.html'
    }
  }
}
