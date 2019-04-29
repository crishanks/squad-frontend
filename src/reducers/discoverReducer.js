const initialState = {
  currentTeam: []
}

const discoverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_TEAM':
      return {
        ...state,
        myTeams: [...state.myTeams, action.payload.team]
      }
    case 'CHOOSE_PLAYER':
    console.log('discover reducer state', state)
      return {
        ...state,
        allPlayers: [...state.allPlayers, action.payload.player]
      }
    default:
      return state
  }
}

export default discoverReducer