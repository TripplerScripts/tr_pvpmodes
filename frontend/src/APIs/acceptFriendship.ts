import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default function acceptFriendship(name: string) {
  sendCallback('acceptFriendship', name)
  createFriendItem(name)
}