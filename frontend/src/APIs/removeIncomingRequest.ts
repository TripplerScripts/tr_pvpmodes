import sendCallback from "../components/sendCallback"

export default (userId: number) => sendCallback<boolean>('removeIncomingRequest', userId)