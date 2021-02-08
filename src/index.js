import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'

import App from './components/App';


const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)