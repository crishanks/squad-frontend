const initialState = {
  matches: []
}

const matchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MATCH': 
      const matches = state.matches.splice()
      matches.push(action.payload)
      return {
        ...state,
        matches: matches
      }
    default:
      return state
  }
}

export default matchReducer