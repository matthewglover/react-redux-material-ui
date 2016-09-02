// NOTE: module only included in development mode, so can use dev-dependencies

import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
/* eslint-enable import/no-extraneous-dependencies */


const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="bottom"
    defaultIsVisible={false}
  >
    <LogMonitor theme="solarized" />
  </DockMonitor>
);

export default DevTools;
