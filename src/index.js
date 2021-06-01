import React from 'react';
import Main from './Main';
import { hydrate, render } from "react-dom";

import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
// eslint-disable-next-line
// import registerServiceWorker from 'react-service-worker';
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Provider store={store}>
    <Main />
  </Provider>, rootElement);
} else {
  render(<Provider store={store}>
    <Main />
  </Provider>, rootElement);
}
// serviceWorker.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();