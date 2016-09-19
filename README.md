[![Coverage Status](https://coveralls.io/repos/github/matthewglover/react-redux-material-ui/badge.svg)](https://coveralls.io/github/matthewglover/react-redux-material-ui) [![Build Status](https://travis-ci.org/matthewglover/react-redux-material-ui.svg?branch=master)](https://travis-ci.org/matthewglover/react-redux-material-ui)

# React, Redux, Material-UI Boilerplate

## What?

A boilerplate React, Redux, Material-UI application.

## Why?

This boilerplate tries to set out a sensible default configuration for developing a front-end React application by combining popular libraries and build tooling. It includes build tooling, tests, continuous integration and automated deployment.

## How?

### User Interface

Uses React for rendering and [Material-UI](http://www.material-ui.com) for UI Components. [React Storybook](https://getstorybook.io/) is included for rendering components outside of the application.

Sass is used for any global CSS.

### State management

Uses [Redux](http://redux.js.org/) for state management, following the basic structure of the Redux Todo App example in the documentation. It also integrates [Redux DevTools](https://github.com/gaearon/redux-devtools), which are automatically excluded from the production build.

The Redux DevTools setup includes [Redux DevTools DockMonitor](https://github.com/gaearon/redux-devtools-dock-monitor) and [Redux DevTools Log Monitor](https://github.com/gaearon/redux-devtools-log-monitor). The Dock's default status is hidden and mounted bottom. To display dock: `ctrl-h`. To toggle dock position: `ctrl-q`. The DevTools configuration is in the [DevTools Component](app/containers/dev_tools.js).

### Build tooling

Uses Webpack and Webpack Dev Server to transpile JSX/ES6 code to cross-browser JavaScript, and to compile Sass to CSS. The Roboto font and [Material Icons](https://design.google.com/icons/) have been included for compatibility with the Material-UI Components.

The Webpack production configuration splits out css code, and uglifies JavaScript, as well as injecting a production flag into the source code to allow for conditional inclusion of development tooling. JavaScript and CSS files are generated using hashes, which help overcome browser caching issues.

### Hot module reloading

Webpack hot module reloading implemented to work on changes to both React and Redux, using [React Hot Loader 3](https://github.com/gaearon/react-hot-loader). The hot module code is based on the [example application](https://github.com/gaearon/redux-devtools/tree/master/examples/todomvc) in the Redux DevTools documentation.

### Linting

This boilerplate uses ESLint with the AirBnB rules, modified to allow JSX in .js files.

The AirBnB rules have also been modified to work better with AVA (primarily by using the babel-eslint parser).

### Types

The boilerplate supports [Flow Types](https://flowtype.org/). These are optional, so you can switched off if not required by removing from the pre-commit hook in package.json.

### Testing

The Test runner is [AVA](https://github.com/avajs/ava), which uses the same `.babelrc` configuration used by Webpack to pre-process the source files. Additionally, AVA allows use of ES6+ features including async await in the test files (NOTE: the tests are transpiled using a different babel configuration from the source files).

### Testing React Components
TBD

### Code Coverage

Code coverage is run as part of the Travis.ci build, with test reporting integrated via [Coveralls](https://coveralls.io/).

TBD:

- Code coverage reporting
- Add React Component tests
- Update tests in line with [Some thoughts on testing React/Redux Applications](https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.3r96ole61)

### Continuous Integration and Deployment

Travis-ci is setup for CI, which runs a linter and tests.

On successful completion of the tests, code coverage data is sent to Coveralls and the application is deployed to [Heroku](https://react-redux-material-ui.herokuapp.com).


### Git hooks

Git hooks integrated via [husky](https://github.com/typicode/husky). Currently configured to run linter and tests prior to commit.

## Resources

- [Some thoughts on testing React/Redux Applications](https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.3r96ole61)

-
