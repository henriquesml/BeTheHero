import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

import { store } from './store'

export default function Routes() {

  const { signed } = store.getState().org

  return (
    <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Login} />
        <Route  path='/register' component={Register} />
        
        {signed &&
        <>
          <Route  path='/profile' component={Profile} />
          <Route  path='/incidents/new' component={NewIncident} />
        </>
        }
      </Switch>
    </BrowserRouter>
  )
}