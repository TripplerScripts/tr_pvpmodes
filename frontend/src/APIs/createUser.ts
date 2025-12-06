import sendCallback from "../components/sendCallback"

export default function createUser(name: string): void {
  sendCallback('createUser', name)
}