import { all } from 'redux-saga/effects'

import theme from './theme/sagas'
import org from './org/sagas'

export default function* rootSaga() {
  return yield all([theme, org])
}