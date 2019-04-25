const initialState = {
  loggedIn: false, 
  currentPlayer: null,
  showCreateProfileForm: false,
  allTeams: [],
  allPlayers: []
}

const homescreenReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true
        // currentPlayer: update with current player on login or on profile creation
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: false
        // currentPlayer: make currentPlayer null on logout
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