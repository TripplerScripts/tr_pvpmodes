import sendCallback from "../components/sendCallback"

export default (name: string, avatar: string) => sendCallback<boolean>('createUser', name, avatar)