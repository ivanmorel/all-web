const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'all.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-shopify/web'],
            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties', '@babel/transform-runtime']
          }
        }
      }
    ]
  }
};