import sendCallback from "../components/sendCallback"

export default async function getFriendablePlayers() {
  const players = await sendCallback('getFriendablePlayers')
  return players
}
