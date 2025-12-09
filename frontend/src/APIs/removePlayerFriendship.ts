import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<boolean>('removePlayerFriendship', identity)