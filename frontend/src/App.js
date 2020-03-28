import React from 'react';
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { store, persistor } from './store'

import Styles from './styles'

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PerfectScrollbar>
          <Styles />
          <ToastContainer autoClose={3000} />
          <Routes />
        </PerfectScrollbar>
      </PersistGate>
    </Provider>
  );
}

export default App;
