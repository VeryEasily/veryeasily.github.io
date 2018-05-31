import { combineReducers, createStore as reduxCreateStore } from 'redux'
import artworkReducer from './artworkReducer'

const rootReducer = combineReducers({
  artwork: artworkReducer
})

const createStore = () => reduxCreateStore(rootReducer, {})

export default createStore
