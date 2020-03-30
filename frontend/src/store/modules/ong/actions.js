export function OngRequest(email, password) {
  return {
    type: '@ong/ONG_REQUEST',
    payload: { email, password }
  }
}

export function OngSuccess(id, name) {
  return {
    type: '@ong/ONG_SUCCESS',
    payload: { id, name }
  }
}

export function OngRegister(name, email, password, whatsapp, city, uf) {
  return {
    type: '@ong/ONG_REGISTER',
    payload: { name, email, password, whatsapp, city, uf }
  }
}

export function OngFail() {
  return {
    type: '@ong/ONG_FAIL'
  }
}

export function OngSignOut() {
  return {
    type: '@ong/ONG_SIGN_OUT'
  }
}
