import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './src/pages/app';
import "lib-flexible";
import './src/assets/css/index.scss';
import store from './src/store';

if (module.hot) {
  module.hot.accept(() => {
    ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  })
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)