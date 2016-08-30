const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: `${__dirname}/app/main.js`,

  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
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

  // Uses default port 8080
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
