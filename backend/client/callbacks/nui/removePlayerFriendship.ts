import removePlayerFriendship from '../APIs/removePlayerFriendship'

RegisterNuiCallback('removePlayerFriendship', async (data: Array<string>, callback: (response: any) => void): Promise<void> => {
  const response = await removePlayerFriendship(null, data[0])
  callback(response)
})