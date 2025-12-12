import sendCallback from "../components/sendCallback"
import CreateUser from "../../../backend/client/APIs/callbacks/createUser"

export default (name: string, avatar: string) => sendCallback<ReturnType<typeof CreateUser>>('createUser', name, avatar)