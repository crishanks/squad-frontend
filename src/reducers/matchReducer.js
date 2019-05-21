const initialState = {
  matches: []
}

const matchReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MATCH': 
      // const matches = action.payload
      // matches.push(action.payload)
      console.log('matchReducer matches', action.payload)
      return {
        ...state,
        matches: action.payload
      }
    default:
      return state
  }
}

export default matchReducer