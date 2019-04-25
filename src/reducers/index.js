//Libraries 
import { combineReducers } from 'redux'

//Reducers
import playerReducer from './playerReducer'
import teamReducer from './teamReducer'
import homescreenReducer from './homescreenReducer'

export default combineReducers({
  playerReducer,
  teamReducer,
  homescreenReducer
})