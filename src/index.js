import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {reducer} from './reducers/reducer';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import App from './App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
);
