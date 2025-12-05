import sendCallback from "../components/sendCallback"

export default async function getOutgoingFriends() {
  const outgoingFriends = await sendCallback('getOutgoingFriends')
  return outgoingFriends
}