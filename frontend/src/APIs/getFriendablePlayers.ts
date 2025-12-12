import GetFriendablePlayers from "../../../backend/client/APIs/callbacks/getFriendablePlayers"
import sendCallback from "../components/sendCallback"

export default () => sendCallback<ReturnType<typeof GetFriendablePlayers>>('getFriendablePlayers')