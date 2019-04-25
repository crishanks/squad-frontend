const initialState = {
  myTeams: [],
  myPlayers: []
}

const discoverReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHOOSE_TEAM':
      return {
        // ...state,
        // myTeams: push new team into teams array,
      }
    case 'CHOOSE_PLAYER':
      return {
        //...state,
        //myTeams: push new player into players array
        //set current user (homescreen state?) to this player object
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