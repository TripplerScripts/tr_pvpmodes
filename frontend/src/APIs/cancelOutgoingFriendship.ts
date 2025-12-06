import sendCallback from "../components/sendCallback"

export default function cancelOutgoingFriendship(name: string): void {
  sendCallback('cancelOutgoingFriendship', name)
}