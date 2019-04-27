export const toggleShowLoginForm = () => {
  return {
    type: 'SHOW_LOGIN_FORM'
  }
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const signup = () => {
  return {
    type: 'SIGN_UP'
  }
}

export const login = () => {
  return {
    type: 'LOG_IN'
  }
}

export const toggleShowProfileContainer = () => {
  return {
    type: 'SHOW_PROFILE_CONTAINER'
  }
}

export const createTeam = () => {
  return {
    type: 'SHOW_CREATE_TEAM_FORM'
  }
}

export const receiveJSON = (json) => {
  console.log('action creator receive json')
  return {
    type: 'HOME_RECEIVE_JSON',
    payload: {json}
  }
}

export const receiveAllPlayers = (json) => {
  console.log('action creator recieve all players')
  return {
    type: 'RECEIVE_ALL_PLAYERS',
    payload: {json}
  }
}

export const receiveAllTeams = (json) => {
  console.log('action creator recieve all players')
  return {
    type: 'RECEIVE_ALL_TEAMS',
    payload: {json}
  }
}