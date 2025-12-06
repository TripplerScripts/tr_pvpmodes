import sendCallback from "../components/sendCallback"

export default function removePlayerFriendship(name: string): void {
  sendCallback('removePlayerFriendship', name)
}