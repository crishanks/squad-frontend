const initialState = {
  showTeamCards: true,
  showTeammateCards: false
}

const myInfoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_TEAM_CARDS':
      return {
        ...state,
        showTeamCards: true,
        showTeammateCards: false
      }
    case 'SHOW_TEAMMATE_CARDS':
      return {
        ...state,
        showTeamCards: false,
        showTeammateCards: true
      }
    default:
    return state
  }
}

export default myInfoReducer