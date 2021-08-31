import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './ReduxStore/store'
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
