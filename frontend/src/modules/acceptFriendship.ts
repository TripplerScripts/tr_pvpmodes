import sendCallback from "../components/sendCallback"

export default function acceptFriendship(name: string) {
  sendCallback('acceptFriendship', name)
}