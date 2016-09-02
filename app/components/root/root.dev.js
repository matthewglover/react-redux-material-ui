import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../app';
import DevTools from '../../containers/dev_tools';

const Root = ({ store }) =>
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
