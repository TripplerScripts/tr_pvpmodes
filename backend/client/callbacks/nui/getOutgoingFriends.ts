import getOutgoingFriends from '../APIs/getOutgoingFriends'

RegisterNuiCallback('getOutgoingFriends', async (_data: Array<any>, callback: (response: any) => void): Promise<void> => {
  const response = await getOutgoingFriends()
  callback(response)
})