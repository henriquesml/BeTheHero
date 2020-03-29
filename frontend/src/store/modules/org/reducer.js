import produce from 'immer'

const INITIAL_STATE = {
  id: null,
  name: null,
  signed: false,
  loading: true
}

export default function org(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@org/ORG_REQUEST': {
        draft.loading = true
        break
      }
      case '@org/ORG_SUCCESS': {
          draft.id = action.payload.id
          draft.name = action.payload.name
          draft.signed = true
          draft.loading = false
          break
        }
        case '@org/ORG_FAIL': {
          draft.loading = false
          break
        }

      case '@org/ORG_SIGN_OUT': {
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