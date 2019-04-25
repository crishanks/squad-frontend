//Libraries 
import { combineReducers } from 'redux'

//Reducers
import candidatesReducer from './candidatesReducer'
import myInfoReducer from './myInfoReducer'
import homescreenReducer from './homescreenReducer'

export default combineReducers({
  candidatesReducer,
  myInfoReducer,
  homescreenReducer
})