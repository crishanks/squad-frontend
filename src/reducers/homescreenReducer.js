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
      return {
        ...state,
        currentPlayer: action.payload.json
      }
    case 'RECEIVE_ALL_PLAYERS':
      return {
        ...state,
        allPlayers: action.payload.json,
        loggedIn: true,
        showLoginForm: false,
        showCreateProfileForm: false
      }
    case 'RECEIVE_ALL_TEAMS':
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
      return initialState
    case 'SIGN_UP':
      return {
        ...state,
        loggedIn: false,
        showLoginForm: false,
        showCreateProfileForm: true,
        showProfileContainer: false
      }
    case 'LOG_IN':
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
    case 'DECLINE_TEAM':
    const allTeamsExceptChosen = state.allTeams.filter(team => {
      return team.id !== action.payload.team.id
    })
      return {
        ...state,
        allTeams: allTeamsExceptChosen
    }
    case 'DECLINE_PLAYER':
      const allPlayersExceptDeclined = state.allPlayers.filter(player => {
        return player.id !== action.payload.player.id
      })
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
    case 'ADD_PLAYER_TO_CURRENT_TEAM':
      const myTeam = state.allTeams.find(team => team.id === state.currentTeam.id)
      const idx = state.allTeams.indexOf(myTeam)
      const updatedTeam = Object.assign({}, myTeam, {players: myTeam.players.concat(action.payload)})
      let updatedTeams = state.allTeams.slice()
      updatedTeams.splice(idx, 1, updatedTeam)
      // updatedTeams.map(team => {
      //   if (team.id === updatedTeam.id) {
      //     return updatedTeam
      //   }
      //   return team
      // })

      return {
        ...state,
        allTeams: updatedTeams
      }
   default:
    return state
  }
}

export default homescreenReducer

    // case 'SHOW_CREATE_TEAM_FORM':
    //   return {
    //     ...state,
    //     loggedIn: true,
    //     showLoginForm: false,
    //     showCreateProfileForm: false,
    //     showProfileContainer: false,
    //     // showCreateTeamForm: true
    //   }