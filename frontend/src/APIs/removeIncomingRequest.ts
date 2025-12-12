import RemoveIncomingRequest from "../../../backend/client/APIs/callbacks/removeIncomingRequest"
import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<ReturnType<typeof RemoveIncomingRequest>>('removeIncomingRequest', identity)