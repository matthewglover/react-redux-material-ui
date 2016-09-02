const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});

server.listen(3000, 'localhost', err => {
  if (err) console.log(err);
  console.log('Listening at localhost:3000');
});
