import sendCallback from "../components/sendCallback"

export default function createUser(name: string) {
  sendCallback('createUser', name)
}