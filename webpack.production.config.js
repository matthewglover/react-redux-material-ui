const { optimize, DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
entry: `${__dirname}/app/main.js`,

output: {
  path: `${__dirname}/public`,
  filename: '[name]-[hash].js'
},

module: {
  loaders: [
    { test: /\.json$/, loader: 'json' },
    { test: /\.jsx*$/, exclude: /node_modules/, loader: 'babel' },
    { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
  ]
},

plugins: [
  new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') }}),
  new HtmlWebpackPlugin({ template: `${__dirname}/app/index.tmpl.html` }),
  new optimize.OccurenceOrderPlugin(),
  new optimize.UglifyJsPlugin(),
  new ExtractTextPlugin('[name]-[hash].css')
]
};
