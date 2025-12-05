import sendCallback from "../components/sendCallback"
import createFriendItem from "../elements/body/friends/list/current/createFriendItem"

export default function acceptFriendship(name: string) {
  sendCallback('acceptFriendship', name)
  createFriendItem(name)
}