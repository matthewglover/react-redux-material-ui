module.exports =
  process.env.NODE_ENV === 'production' ?
    require('./configure_store.production') :
    require('./configure_store.dev');
