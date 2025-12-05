import sendCallback from "../components/sendCallback"

export default function removePlayerFriendship(name: string) {
  sendCallback('removePlayerFriendship', name)
}