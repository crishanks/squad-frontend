//Libraries 
import { combineReducers } from 'redux'

//Reducers
import componentReducer from './componentReducer'
import playerReducer from './playerReducer'
import teamReducer from './teamReducer'

export default combineReducers({
  componentReducer,
  playerReducer,
  teamReducer
})