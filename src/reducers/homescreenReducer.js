const initialState = {
  loggedIn: false, 
  showLoginForm: false,
  showCreateProfileForm: false,
  showProfileContainer: false,
  showCreateTeamForm: false,
  allTeams: [],
  allPlayers: [],
  currentPlayer: {}
}

const homescreenReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_JWT':
      console.log('receiveJWT reducer')
      return {
        ...state,
        currentPlayer: action.payload.json
      }
    case 'RECEIVE_ALL_PLAYERS':
    console.log('receive all players reducer')
      return {
        ...state,
        allPlayers: action.payload.json,
        loggedIn: true,
        showLoginForm: false
      }
    case 'RECEIVE_ALL_TEAMS':
    console.log('receive all teams reducer')
      return {
        ...state,
        allTeams: action.payload.json
      }
    case 'SHOW_LOGIN_FORM':
      return {
        ...state,
        showLoginForm: true,
        loggedIn: false,
        showCreateProfileForm: false,
        showCreateTeamForm: false
      }
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: false,
        showLoginForm: false,
        showProfileContainer: false,
        showCreateTeamForm: false
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
    console.log('login reducer')
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
   default:
    return state
  }
}

export default homescreenReducer