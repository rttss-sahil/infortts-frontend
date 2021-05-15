import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import registerServiceWorker from 'react-service-worker';
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();