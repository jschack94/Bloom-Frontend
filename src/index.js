import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import './index.css';
import './app.css';
import { ActionCableProvider } from 'react-actioncable-provider'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';






ReactDOM.render(
  <ActionCableProvider url={'ws://localhost:3000/cable'}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    </ActionCableProvider>,
  
  document.getElementById('root'))
registerServiceWorker()