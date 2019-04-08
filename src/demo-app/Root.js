import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from '../components';

const routes = [
  {
    url: '/',
    component: App,
    exact: true
  }
];

ReactDOM.render(
  <Router routes={routes}/>,
  document.getElementById('app')
);