import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) =>
  <Provider store={store}>
    <div>
      <div>Hello Worlds!</div>
      <App />
    </div>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
