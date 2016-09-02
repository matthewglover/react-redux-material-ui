const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    `${__dirname}/app/main.js`,
  ],

  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/app/index.tmpl.html` }),
    new HotModuleReplacementPlugin()
  ],
};
