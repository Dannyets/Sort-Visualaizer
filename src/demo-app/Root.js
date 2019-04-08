import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import { Header } from './App.styles.js';

import App from './App';
import { Router, ThemeProvider } from '../components';
import Navigation from '../components/navigation';
const NavigationWithRouter = withRouter(Navigation);

const routes = [
  {
    url: '/',
    component: App,
    exact: true
  }
];

const Root = (
  <ThemeProvider>
    <Router routes={routes}>
        <Header>
          <NavigationWithRouter />
        </Header>
      </Router>
  </ThemeProvider>
);

ReactDOM.render(
  Root,
  document.getElementById('app')
);