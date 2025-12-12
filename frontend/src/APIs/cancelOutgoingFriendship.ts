import sendCallback from "../components/sendCallback"
import CancelOutgoingFriendship from "../../../backend/client/APIs/callbacks/cancelOutgoingFriendship"

export default (identity: number) => sendCallback<ReturnType<typeof CancelOutgoingFriendship>>('cancelOutgoingFriendship', identity)
