const initialState = {
  myTeams: [],
  myPlayers: []
}

const discoverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_TEAM':
      return {
        ...state,
        myTeams: [...state.myTeams, action.payload.team]
      }
    case 'CHOOSE_PLAYER':
      return {
        ...state,
        myPlayers: [...state.myPlayers, action.payload.player]
      }
    default:
      return state
  }
}

export default discoverReducer