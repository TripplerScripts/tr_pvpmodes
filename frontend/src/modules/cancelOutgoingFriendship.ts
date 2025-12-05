import sendCallback from "../components/sendCallback"

export default function cancelOutgoingFriendship(name: string) {
  sendCallback('cancelOutgoingFriendship', name)
}