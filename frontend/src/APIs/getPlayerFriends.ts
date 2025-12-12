import refreshFriends from "../interactions/refreshFriends"
import sendCallback from "../components/sendCallback"
import GetFriendablePlayers from "../../../backend/client/APIs/callbacks/getFriendablePlayers"

export default async () => {
  const friends = await sendCallback<ReturnType<typeof GetFriendablePlayers>>('getPlayerFriends')
  refreshFriends((friends as number[])?.length)
  return friends
}