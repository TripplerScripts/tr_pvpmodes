import GetUserProfile from "../../../backend/client/APIs/callbacks/getUserProfile"
import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<ReturnType<typeof GetUserProfile>>('getUserProfile', identity)