export const choosePlayer = (player) => {
  return {
    type: 'CHOOSE_PLAYER',
    payload: {player}
  }
}

export const chooseTeam = (team) => {
  return {
    type: 'CHOOSE_TEAM',
    payload: {team}
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

