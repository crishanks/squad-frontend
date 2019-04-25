const initialState = {
  loggedIn: false, 
  user: null,
  showCreateProfileForm: false
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
        showCreateProfileForm: false,
        user:null
      }
    case 'SIGN_UP':
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: true
      }
   default:
    return state
  }
}

export default homescreenReducer