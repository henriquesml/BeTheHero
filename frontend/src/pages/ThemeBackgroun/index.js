import React from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './styles'

import themes from '../../styles/themes'

export default function DarkLayout({ children }) {

  const theme = useSelector(state => state.theme.theme)

  return (
    <ThemeProvider theme={themes[theme]}>
      <Wrapper theme={themes[theme]}>
        {children}
      </Wrapper>
    </ThemeProvider>
  );
}

DarkLayout.propTypes = {
  children: PropTypes.element.isRequired
}