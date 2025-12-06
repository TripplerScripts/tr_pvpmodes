import sendCallback from "../components/sendCallback"

export default (playerName: string) => sendCallback<boolean>('sendUserFriendInvitation', playerName)