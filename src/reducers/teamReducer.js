const initialState = {
  allTeams: [],
  currentTeam: {}
}

const teamReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_ALL_TEAMS':
      return {
        ...state,
        allTeams: action.payload.json
      }
    case 'DECLINE_TEAM':
    const allTeamsExceptChosen = state.allTeams.filter(team => {
      return team.id !== action.payload.team.id
    })
      return {
        ...state,
        allTeams: allTeamsExceptChosen
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
    case 'ADD_PLAYER_TO_CURRENT_TEAM':
      const myTeam = state.allTeams.find(team => team.id === state.currentTeam.id)
      const idx = state.allTeams.indexOf(myTeam)
      const updatedTeam = Object.assign({}, myTeam, {players: myTeam.players.concat(action.payload)})
      let updatedTeams = state.allTeams.slice()
      updatedTeams.splice(idx, 1, updatedTeam)
      
      return {
        ...state,
        allTeams: updatedTeams
      }
   default:
    return state
  }
}

export default teamReducer