import GetIncomingFriends from "../../../backend/client/APIs/callbacks/getIncomingFriends"
import sendCallback from "../components/sendCallback"

export default () => sendCallback<ReturnType<typeof GetIncomingFriends>>('getIncomingFriends')
