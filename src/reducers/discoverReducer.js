const initialState = {
  myTeams: [],
  myPlayers: []
}

const discoverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_TEAM':
      return {
        ...state,
        myTeams: [...initialState.myTeams, action.payload.team]
      }
    case 'CHOOSE_PLAYER':
      return {
        ...state,
        myPlayers: [...initialState.myPlayers, action.payload.player]
      }
    case 'DECLINE_TEAM':
      return {
        //...state,
        //remove this team from app's allTeams array
      }
    case 'DECLINE_PLAYER':
      return {
        //...state,
        //remove this player form app's allPlayers array
      }
    default:
      return state
  }
}

export default discoverReducer