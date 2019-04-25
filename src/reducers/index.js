//Libraries 
import { combineReducers } from 'redux'

//Reducers
import candidatesReducer from './candidatesReducer'
import myInfoReducer from './myInfoReducer'
import homescreenReducer from './homescreenReducer'
import discoverReducer from './discoverReducer'

export default combineReducers({
  candidatesReducer,
  myInfoReducer,
  discoverReducer,
  homescreenReducer
})