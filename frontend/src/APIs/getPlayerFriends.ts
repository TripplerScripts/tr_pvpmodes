import refreshFriends from "../interactions/refreshFriends"
import sendCallback from "../components/sendCallback"

export default async () => {
  const friends = await sendCallback<number[]>('getPlayerFriends')
  refreshFriends(friends.length)
  return friends
}