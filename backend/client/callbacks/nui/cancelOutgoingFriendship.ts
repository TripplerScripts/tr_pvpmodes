import cancelOutgoingFriendship from '../APIs/cancelOutgoingFriendship'

RegisterNuiCallback('cancelOutgoingFriendship', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
  const response = await cancelOutgoingFriendship(null, data[0])
  callback(response)
})