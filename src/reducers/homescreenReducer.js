const initialState = {
  loggedIn: false, 
  showLoginForm: false,
  currentPlayer: null,
  currentPlayerJWTToken: null,
  showCreateProfileForm: false,
  showProfileContainer: false,
  showCreateTeamForm: false,
  allTeams: [],
  allPlayers: [],
  showTeams: false,
  showPlayers: true
}

const homescreenReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_LOGIN_FORM':
      return {
        ...state,
        showLoginForm: true,
        loggedIn: false,
        showCreateProfileForm: false,
        showCreateTeamForm: false
        // currentPlayer: update with current player on login or on profile creation
        //currentPlayerJWTToken: update with token in response
        //they'll hit this method when they submit the sign up form as well
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: false,
        showLoginForm: false,
        showProfileContainer: false,
        showCreateTeamForm: false
        // currentPlayer: make currentPlayer null on logout
        // JWT token null on logout
      }
    case 'SIGN_UP':
      return {
        ...state,
        loggedIn: false,
        showLoginForm: false,
        showCreateProfileForm: true,
        showProfileContainer: false,
        showCreateTeamForm: false
      }
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false,
        showProfileContainer: false,
        showCreateTeamForm: false
      }
    case 'SHOW_PROFILE_CONTAINER':
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false,
        showProfileContainer: true,
        showCreateTeamForm: false
      }
    case 'SHOW_CREATE_TEAM_FORM':
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false,
        showProfileContainer: false,
        showCreateTeamForm: true
      }
    case 'SHOW_TEAMS':
      return {
        ...state,
        showTeams: true,
        showPlayers: false
      }
    case 'SHOW_PLAYERS':
      return {
        ...state,
        showTeams: false,
        showPlayers: true
      }
   default:
    return state
  }
}

export default homescreenReducer