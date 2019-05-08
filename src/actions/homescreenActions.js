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

export const createTeam = (team) => {
  return {
    type: 'CREATE_TEAM',
    payload: {team}
  }
}

export const receiveJWT = (json) => {
  return {
    type: 'RECEIVE_JWT',
    payload: {json}
  }
}

export const receiveAllPlayers = (json) => {
  return {
    type: 'RECEIVE_ALL_PLAYERS',
    payload: {json}
  }
}

export const receiveAllTeams = (json) => {
  return {
    type: 'RECEIVE_ALL_TEAMS',
    payload: {json}
  }
}

export const receiveCurrentTeam = (json) => {
  return {
    type: 'RECEIVE_CURRENT_TEAM',
    payload: {json}
  }
}

export const declinePlayer = (player) => {
  return {
    type: 'DECLINE_PLAYER',
    payload: {player}
  }
}

export const declineTeam = (team) => {
  return {
    type: 'DECLINE_TEAM',
    payload:  {team}
  }
}

export const receiveCurrentPlayer = (player) => {
  return {
    type: 'RECEIVE_CURRENT_PLAYER',
    payload: {player}
  }
}

export const addPlayerToCurrentTeam = (player) => {
  return {
    type: 'ADD_PLAYER_TO_CURRENT_TEAM',
    payload: player
  }
}