const initialState = {
  allPlayers: [],
  allTeams: []
}

const discoverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_TEAM':
      return {
        ...state,
        allTeams: [...state.myTeams, action.payload.team]
      }
    case 'CHOOSE_PLAYER':
      return {
        ...state,
        allPlayers: [...state.allPlayers, action.payload.player]
      }
    default:
      return state
  }
}

export default discoverReducer