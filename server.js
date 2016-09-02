const hapiWrapper = require('hapi-wrapper');

const port = process.env.PORT || 4000;
const connectionOptions = { port };
const plugins = [];
const routes = [];

hapiWrapper.createServer()
  .then(hapiWrapper.setConnection(connectionOptions))
  .then(hapiWrapper.registerPlugins(plugins))
  .then(hapiWrapper.addRoutes(routes))
  .then(hapiWrapper.startServer)
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
