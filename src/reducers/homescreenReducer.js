const initialState = {
  loggedIn: false, 
  showLoginForm: false,
  showCreateProfileForm: false,
  showProfileContainer: false,
  allTeams: [],
  allPlayers: [],
  currentPlayer: {},
  currentTeam: {}
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
        showLoginForm: false,
        showCreateProfileForm: false
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
        showCreateProfileForm: false
      }
    case 'LOG_OUT':
    localStorage.removeItem('token')
      return {
        ...state,
        loggedIn: false,
        showCreateProfileForm: false,
        showLoginForm: false,
        showProfileContainer: false
      }
    case 'SIGN_UP':
      return {
        ...state,
        loggedIn: false,
        showLoginForm: false,
        showCreateProfileForm: true,
        showProfileContainer: false
      }
    case 'LOG_IN':
    console.log('login reducer')
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false,
        showProfileContainer: false
      }
    case 'SHOW_PROFILE_CONTAINER':
      return {
        ...state,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false,
        showProfileContainer: true
      }
    // case 'SHOW_CREATE_TEAM_FORM':
    //   return {
    //     ...state,
    //     loggedIn: true,
    //     showLoginForm: false,
    //     showCreateProfileForm: false,
    //     showProfileContainer: false,
    //     // showCreateTeamForm: true
    //   }
    case 'DECLINE_TEAM':
    const allTeamsExceptChosen = state.allTeams.filter(team => {
      return team.id !== action.payload.team.id
    })
      return {
        ...state,
        allTeams: allTeamsExceptChosen
    }
    case 'DECLINE_PLAYER':
    console.log('hitting decline player reducer')
      const allPlayersExceptDeclined = state.allPlayers.filter(player => {
        return player.id !== action.payload.player.id
      })
      console.log('allplayers except declined', allPlayersExceptDeclined)
      return {
        ...state,
        allPlayers: allPlayersExceptDeclined
      }
    case 'CHOOSE_PLAYER':
      const allPlayersExceptChosen = state.allPlayers.filter(player => {
        return player.id !== action.payload.player.id
      })
      return {
        ...state,
        allPlayers: allPlayersExceptChosen
      }
    case 'CREATE_TEAM':
    return {
      ...state,
      allTeams: [...state, action.payload.team]
    }
    case 'RECEIVE_CURRENT_TEAM':
    return {
      ...state,
      currentTeam: action.payload.json
    }
    case 'RECEIVE_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload.player
      }
   default:
    return state
  }
}

export default homescreenReducer