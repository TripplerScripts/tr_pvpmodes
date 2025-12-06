import sendCallback from "../components/sendCallback"

export default () => sendCallback<string[]>('getIncomingFriends')