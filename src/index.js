  
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import './index.css';
import './app.css';









ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  
  document.getElementById('root'))
registerServiceWorker()