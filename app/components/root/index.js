module.exports =
  process.env.NODE_ENV === 'production' ?
    require('./root.production') :
    require('./root.dev');
