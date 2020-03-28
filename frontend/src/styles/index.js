import React from 'react';
import { useSelector } from 'react-redux'

import GlobalStyle from './global'
import themes from './themes';

const Styles = () => {

  return (
    <GlobalStyle theme={themes[useSelector(state => state.theme.theme)]}/>
  );
}

export default Styles
