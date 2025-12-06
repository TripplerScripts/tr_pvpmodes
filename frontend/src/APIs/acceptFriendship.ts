import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default function acceptFriendship(name: string): Promise<boolean> {
  const response = sendCallback('acceptFriendship', name)
  if (!response) return
  createFriendItem(name)
}