import GetOutgoingFriends from "../../../backend/client/APIs/callbacks/getOutgoingFriends"
import sendCallback from "../components/sendCallback"

export default () => sendCallback<ReturnType<typeof GetOutgoingFriends>>('getOutgoingFriends')