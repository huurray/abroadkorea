import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './redux/configStore';
import { config } from './firebase.config';
const { store } = configureStore();

import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
