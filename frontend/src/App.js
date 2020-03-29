import React from 'react';
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Routes from './Routes'

import { store, persistor } from './store'
import history from './services/history'
import Styles from './styles'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <PerfectScrollbar>
            <Routes />
            <Styles />
            <ToastContainer autoClose={3000} />
          </PerfectScrollbar>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
