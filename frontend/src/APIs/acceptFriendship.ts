import sendCallback from "../components/sendCallback"
import createFriendItem from "../modules/createFriendItem"
import AcceptFriendship from "../../../backend/client/APIs/callbacks/acceptFriendship"

export default async (identity: number) => {
  const response = await sendCallback<ReturnType<typeof AcceptFriendship>>('acceptFriendship', identity)
  if (!response) return
  createFriendItem(identity)
  return true
}