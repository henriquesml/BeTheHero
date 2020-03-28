import React from 'react';
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import PerfectScrollbar from 'react-perfect-scrollbar'

import GlobalStyle from './styles/global'

function App() {
  return (
    <PerfectScrollbar>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes />
    </PerfectScrollbar>
  );
}

export default App;
