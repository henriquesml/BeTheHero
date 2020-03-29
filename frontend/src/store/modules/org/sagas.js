import { all, takeLatest, call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { OrgFail, OrgSuccess } from './actions'

import api from '../../../services/api'
import history from '../../../services/history'

export function* OrgRequest({ payload }){

  try {
    const { email, password } = payload

    const response = yield call(api.post, 'sessions', {
      email,
      password
    })

    yield put(OrgSuccess(response.data.id, response.data.name))
    history.push('/profile')

  } catch (err) {
    toast.error(err.response.data.error)
    yield put(OrgFail())
  }
}



export function signOut() {
  console.log('toaqui')
  history.push('/')
}

export default all([
  takeLatest('@org/ORG_REQUEST', OrgRequest),
  takeLatest('@org/ORG_SIGN_OUT', signOut),
])