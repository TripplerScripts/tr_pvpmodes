import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default async (identity: number): Promise<boolean> => {
  const response = await sendCallback<boolean>('acceptFriendship', identity)
  if (!response) return false
  const _response = await createFriendItem(identity)
  if (!_response) return false
  return true
}