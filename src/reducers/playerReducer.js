const initialState = {
  allPlayers: [],
  currentPlayer: {}
}

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_JWT':
      return {
        ...state,
        currentPlayer: action.payload.json
      }
    case 'RECEIVE_ALL_PLAYERS':
      console.log('RECIEVE ALL PLAYERS', action.payload.json)
      return {
        ...state,
        allPlayers: action.payload.json
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

      return {
        ...state,
        allTeams: updatedTeams
      }
    default:
      return state
  }
}

export default playerReducer