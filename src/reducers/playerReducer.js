const initialState = {
  allPlayers: [],
  currentPlayer: {}
}

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_JWT':
      console.log('receive jwt action.payload.json', action.payload.json)
      return {
        ...state,
        currentPlayer: action.payload.json
      }
    case 'RECEIVE_ALL_PLAYERS':
      return {
        ...state,
        allPlayers: action.payload.json
      }
    case 'HIDE_PLAYER':
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
    case 'RECEIVE_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload.player
      }
    default:
      return state
  }
}

export default playerReducer