//Libraries 
import { combineReducers } from 'redux'

//Reducers
import componentReducer from './componentReducer'
import playerReducer from './playerReducer'
import matchReducer from './matchReducer'

export default combineReducers({
  componentReducer,
  playerReducer,
  matchReducer
})