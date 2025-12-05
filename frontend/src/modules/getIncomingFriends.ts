import sendCallback from "../components/sendCallback"

export default async function getIncomingFriends() {
  const incomingFriends = await sendCallback('getIncomingFriends')
  return incomingFriends
}