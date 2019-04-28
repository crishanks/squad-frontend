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
  console.log('login action')
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

export const receiveJWT = (json) => {
  console.log('receiveJWT action')
  return {
    type: 'RECEIVE_JWT',
    payload: {json}
  }
}

export const receiveAllPlayers = (json) => {
  console.log('receive all players action')
  return {
    type: 'RECEIVE_ALL_PLAYERS',
    payload: {json}
  }
}

export const receiveAllTeams = (json) => {
  console.log('receive all teams action')
  return {
    type: 'RECEIVE_ALL_TEAMS',
    payload: {json}
  }
}