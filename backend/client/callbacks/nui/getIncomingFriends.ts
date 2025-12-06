import getIncomingFriends from '../APIs/getIncomingFriends'

RegisterNuiCallback('getIncomingFriends', async (_data: Array<any>, callback: (response: any) => void): Promise<void> => {
  const response = await getIncomingFriends()
  callback(response)
})