/* eslint-disable no-param-reassign, no-return-assign */
const autoBind = obj =>
  Object.getOwnPropertyNames(Object.getPrototypeOf(obj))
        .filter(key => typeof obj[key] === 'function')
        .forEach(key => obj[key] = obj[key].bind(obj));

export default autoBind;
