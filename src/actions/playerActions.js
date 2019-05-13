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

export const hidePlayer = (player) => {
  return {
    type: 'HIDE_PLAYER',
    payload: {player}
  }
}

export const receiveCurrentPlayer = (player) => {
  return {
    type: 'RECEIVE_CURRENT_PLAYER',
    payload: {player}
  }
}

export const match = (player) => {
  return {
    type: 'MATCH',
    payload: player
  }
}