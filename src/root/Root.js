import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore, initialState } from '../store';
import routes from './routes';

import { Header } from './Root.styles';

import { Router, ThemeProvider, Navigation } from '../components';
const NavigationWithRouter = withRouter(Navigation);

const store = configureStore(initialState);

const Root = (
  <Provider store={store}>
    <ThemeProvider>
      <Router routes={routes}>
          <Header>
            <NavigationWithRouter />
          </Header>
        </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  Root,
  document.getElementById('app')
);