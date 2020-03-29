export function OrgRequest(email, password) {
  return {
    type: '@org/ORG_REQUEST',
    payload: { email, password }
  }
}

export function OrgSuccess(id, name) {
  return {
    type: '@org/ORG_SUCCESS',
    payload: { id, name }
  }
}

export function OrgFail() {
  return {
    type: '@org/ORG_FAIL'
  }
}

export function OrgSignOut() {
  return {
    type: '@org/ORG_SIGN_OUT'
  }
}
