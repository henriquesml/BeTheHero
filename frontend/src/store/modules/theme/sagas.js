import { all, takeLatest, put } from 'redux-saga/effects'

import { themeDark, themeLight } from './actions'

export function* theme({ payload }){
 
  const theme = payload
  if (theme.theme === 'light' ) {
    yield put(themeLight())
  } else {
    yield put(themeDark())
  }
}

export default all([
  takeLatest('@theme/THEME_REQUEST', theme),
  takeLatest('@theme/THEME_LIGHT', themeLight),
  takeLatest('@theme/THEME_DARK', themeDark)
])