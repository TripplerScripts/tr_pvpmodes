import sendCallback from "../components/sendCallback"

export default (name: string) => sendCallback<boolean>('removePlayerFriendship', name)