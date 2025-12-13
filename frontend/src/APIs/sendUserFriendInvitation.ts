import sendCallback from "../components/sendCallback"
import sendUserFriendInvitation from "../../../backend/client/APIs/callbacks/sendUserFriendInvitation"  

export default (identity: number) => sendCallback<ReturnType<typeof sendUserFriendInvitation>>('sendUserFriendInvitation', identity)