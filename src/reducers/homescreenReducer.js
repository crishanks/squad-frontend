const initialState = {
  loggedIn: false, 
  user: null
}

const homescreenReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true,
        user: null
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        user:null
      }
   default:
    return state
  }
}

export default homescreenReducer