import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './scss/main.scss';
import Root from './components/root';
import configureStore from './configure_store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);


// See https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc
if (module.hot) {
  module.hot.accept('./components/root', () => {
    // eslint-disable-next-line global-require
    const RootContainer = require('./components/root').default;

    render(
      <AppContainer>
        <RootContainer store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
