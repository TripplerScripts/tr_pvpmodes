import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"

export default async (identity: number): Promise<boolean> => {
  const response = await sendCallback<boolean>('acceptFriendship', identity)
  console.log(response)
  if (!response) return
  createFriendItem(identity)
  return true
}