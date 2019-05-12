export const match = (player) => {
  return {
    type: 'MATCH',
    payload: player
  }
}