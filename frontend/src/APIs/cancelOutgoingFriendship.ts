import sendCallback from "../components/sendCallback"

export default (identity: number) => sendCallback<number>('cancelOutgoingFriendship', identity)