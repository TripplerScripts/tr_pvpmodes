import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default async (name: string): Promise<boolean> => {
  const response = await sendCallback<boolean>('acceptFriendship', name)
  if (!response) return false
  const _response = await createFriendItem(name)
  if (!_response) return false
  return true
}