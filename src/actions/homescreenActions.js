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

export const chooseShowTeams = () => {
  return {
    type: 'SHOW_TEAMS'
  }
}

export const chooseShowPlayers = () => {
  return {
    type: 'SHOW_PLAYERS'
  }
}