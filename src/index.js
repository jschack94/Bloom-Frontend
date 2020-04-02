import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
   <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
