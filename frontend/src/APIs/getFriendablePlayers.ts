import sendCallback from "../components/sendCallback"

export default async function getFriendablePlayers(): Promise<string[]> {
  const players = await sendCallback('getFriendablePlayers')
  return players
}
