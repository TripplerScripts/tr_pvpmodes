import sendCallback from "../components/sendCallback"

export default async function getIncomingFriends(): Promise<string[]> {
  const incomingFriends = await sendCallback('getIncomingFriends')
  return incomingFriends
}