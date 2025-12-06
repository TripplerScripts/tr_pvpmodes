import sendCallback from "../components/sendCallback"

export default async function getOutgoingFriends(): Promise<string[]> {
  const outgoingFriends = await sendCallback('getOutgoingFriends')
  return outgoingFriends
}