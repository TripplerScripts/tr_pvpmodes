import { ServerProfile } from "../../../backend/client/types"
import sendCallback from "../components/sendCallback"

export default () => sendCallback<ServerProfile>('getServerProfile')