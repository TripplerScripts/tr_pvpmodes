import refreshFriends from "../interactions/refreshFriends"
import sendCallback from "../components/sendCallback"

export default async function getPlayerFriends() {
  const friends = await sendCallback('getPlayerFriends')
  refreshFriends(friends.length)
  return friends
}