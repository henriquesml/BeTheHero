import { combineReducers } from 'redux'

import theme from './theme/reducer'
import org from './org/reducer'

export default combineReducers({
  theme,
  org
})