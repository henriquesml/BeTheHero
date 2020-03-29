import { all } from 'redux-saga/effects'

import theme from './theme/sagas'
import ong from './ong/sagas'

export default function* rootSaga() {
  return yield all([theme, ong])
}