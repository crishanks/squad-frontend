import playerReducer from './playerReducer'
import teamReducer from './teamReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  playerReducer,
  teamReducer
})