import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import ThemeBackground from '../pages/ThemeBackgroun'

import { store } from '../store'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isUndefined,
  ...rest
}) {
  const { signed } = store.getState().org

  if (!signed && ( isPrivate || isUndefined )) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }


  return (
    <Route
      {...rest}
        render={props => (
          <ThemeBackground>
            <Component {...props} />
          </ThemeBackground>
    )}/>
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isUndefined: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  isUndefined: false
}