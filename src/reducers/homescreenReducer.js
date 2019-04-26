const initialState = {
  loggedIn: false, 
  showLoginForm: false,
  currentPlayer: null,
  currentPlayerJWTToken: null,
  showCreateProfileForm: false,
  allTeams: [],
  allPlayers: []
}

const homescreenReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_LOGIN_FORM':
      return {
        ...state,
        showLoginForm: true,
        loggedIn: false,
        showCreateProfileForm: false
        // currentPlayer: update with current player on login or on profile creation
        //currentPlayerJWTToken: update with token in response
        //they'll hit this method when they submit the sign up form as well
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: false,
        showLoginForm: false
        // currentPlayer: make currentPlayer null on logout
        // JWT token null on logout
      }
    case 'SIGN_UP':
      return {
        ...state,
        loggedIn: false,
        showLoginForm: false,
        showCreateProfileForm: true
      }
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false
      }
   default:
    return state
  }
}

export default homescreenReducer