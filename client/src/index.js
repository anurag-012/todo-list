// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import reducers and styling
import { reducers } from './reducers';
import App from './App';
import './index.css';

// Create a Redux store with thunk middleware
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Render the App component wrapped with the Provider and connected to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
