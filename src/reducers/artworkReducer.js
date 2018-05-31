import { TOGGLE_ART_FOCUS } from '../helpers/constants'

const INITIAL_STATE = {
  active: null
}

const artworkReducer = (prevState, action) => {
  if (typeof prevState === 'undefined') { return INITIAL_STATE }
  switch (action.type) {
    case TOGGLE_ART_FOCUS:
      return {
        ...prevState,
        activeId: action.art.activeId
      }
    default:
      return undefined
  }
}

export default artworkReducer
