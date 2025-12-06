import sendCallback from "../components/sendCallback"
import { GetFriendablePlayersResponse } from "../types"

export default (): Promise<GetFriendablePlayersResponse> => {
  return sendCallback('getFriendablePlayers')
}