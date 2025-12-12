import RemovePlayerFriendship from "../../../backend/client/APIs/callbacks/removePlayerFriendship"
import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<ReturnType<typeof RemovePlayerFriendship>>('removePlayerFriendship', identity)