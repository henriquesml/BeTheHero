import produce from 'immer'

const INITIAL_STATE = {
  id: null,
  name: null,
  signed: false,
  loading: true
}

export default function ong(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@ong/ONG_REQUEST': {
        draft.loading = true
        break
      }
      case '@ong/ONG_SUCCESS': {
          draft.id = action.payload.id
          draft.name = action.payload.name
          draft.signed = true
          draft.loading = false
          break
      }
      case '@ong/ONG_REGISTER': {
        draft.loading = true
        break
      }
      case '@ong/ONG_FAIL': {
        draft.loading = false
        break
      }

      case '@ong/ONG_SIGN_OUT': {
        draft.id = null
        draft.name = null
        draft.signed = false
        break
      }

      default:
        return state
    }
  })
}