export const createTeam = (team) => {
  return {
    type: 'CREATE_TEAM',
    payload: {team}
  }
}

export const receiveAllTeams = (json) => {
  console.log('RECIEVE ALL TEAMS ACTION', json)
  return {
    type: 'RECEIVE_ALL_TEAMS',
    payload: {json}
  }
}

export const receiveCurrentTeam = (json) => {
  console.log('RECIEVE CURRENT TEAM', json)
  return {
    type: 'RECEIVE_CURRENT_TEAM',
    payload: {json}
  }
}

export const declineTeam = (team) => {
  return {
    type: 'DECLINE_TEAM',
    payload:  {team}
  }
}

export const addPlayerToCurrentTeam = (player) => {
  return {
    type: 'ADD_PLAYER_TO_CURRENT_TEAM',
    payload: player
  }
}