const initialState = {
  showTeams: false,
  showPlayers: true
}

const candidatesReducer = (state = initialState, action) => {
  switch(action.type) {
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

export default candidatesReducer