import refreshFriends from "../interactions/refreshFriends"
import sendCallback from "../components/sendCallback"

export default async function getPlayerFriends(): Promise<string[]> {
  const friends = await sendCallback('getPlayerFriends')
  refreshFriends(friends.length)
  return friends
}