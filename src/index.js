'use strict';
import React from 'react';
import { render } from 'react-dom';
import Root from 'src/root';
import { Provider } from 'react-redux';
import Store from './store';
import 'regenerator-runtime';

render(
  <Provider store={Store}>
    <Root />
  </Provider>,
  document.querySelector('[data-js="app"]')
);
