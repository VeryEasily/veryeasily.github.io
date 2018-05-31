import { FOCUS_ARTWORK } from '../helpers/constants'
import R from 'ramda'

const INITIAL_STATE = {
  active: null
}

const artworkReducer = (prevState, action) => {
  if (typeof prevState === 'undefined') { return INITIAL_STATE }
  switch (action.type) {
    case FOCUS_ARTWORK:
      return R.clone(prevState)
    default:
      return undefined
  }
}

export artworkReducer
