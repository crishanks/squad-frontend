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


