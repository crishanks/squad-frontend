//Libraries 
import { combineReducers } from 'redux'

//Reducers
import myInfoReducer from './myInfoReducer'
import homescreenReducer from './homescreenReducer'
import discoverReducer from './discoverReducer'

export default combineReducers({
  myInfoReducer,
  discoverReducer,
  homescreenReducer
})