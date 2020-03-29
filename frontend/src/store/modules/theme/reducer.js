import produce from 'immer'

const INITIAL_STATE = {
  theme: 'light'
}

export default function theme(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@theme/THEME_DARK': {        
        draft.theme = 'dark'
        break
      }
      case '@theme/THEME_LIGHT': {
        draft.theme = 'light'
        break
      }
      default:
        return state
    }
  })
}