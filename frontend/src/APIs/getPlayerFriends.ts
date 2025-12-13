import refreshFriends from "../interactions/refreshFriends"
import sendCallback from "../components/sendCallback"
import GetPlayerFriends from "../../../backend/client/APIs/callbacks/getPlayerFriends"

export default async () => {
  const friends = await sendCallback<ReturnType<typeof GetPlayerFriends>>('getPlayerFriends')
  refreshFriends((friends as number[])?.length)
  return friends
}