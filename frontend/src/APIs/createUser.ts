import sendCallback from "../components/sendCallback"

export default (name: string, avatar: string) => sendCallback<number>('createUser', name, avatar)