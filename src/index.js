import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducer/rootReducer';
import Promise from "redux-promise";

const store = createStore(rootReducer, compose(applyMiddleware(Promise)))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
