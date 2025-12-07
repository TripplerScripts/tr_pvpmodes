import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default async (userId: number): Promise<boolean> => {
  const response = await sendCallback<boolean>('acceptFriendship', userId)
  if (!response) return false
  const _response = await createFriendItem(userId)
  if (!_response) return false
  return true
}