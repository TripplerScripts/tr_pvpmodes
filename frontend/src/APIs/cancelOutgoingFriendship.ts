import sendCallback from "../components/sendCallback"

export default (userId: number) => sendCallback<number>('cancelOutgoingFriendship', userId)