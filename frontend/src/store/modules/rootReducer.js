import { combineReducers } from 'redux'

import theme from './theme/reducer'
import ong from './ong/reducer'

export default combineReducers({
  theme,
  ong
})