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

export const declinePlayer = (player) => {
  return {
    type: 'DECLINE_PLAYER',
    payload: {player}
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