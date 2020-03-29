import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { OngFail, OngSuccess } from './actions'
import { themeLight } from '../theme/actions'

import api from '../../../services/api'
import history from '../../../services/history'

export function* OngRequest({ payload }){

  try {
    const { email, password } = payload

    const response = yield call(api.post, 'sessions', {
      email,
      password
    })

    yield put(OngSuccess(response.data.id, response.data.name))
    history.push('/profile')

  } catch (err) {
    toast.error(err.response.data.error)
    yield put(OngFail())
  }
}



export function* signOut() {
  yield put(themeLight())
  history.push('/')
}

export default all([
  takeLatest('@ong/ONG_REQUEST', OngRequest),
  takeLatest('@ong/ONG_SIGN_OUT', signOut),
])