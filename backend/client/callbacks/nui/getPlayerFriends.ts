import getPlayerFriends from '../APIs/getPlayerFriends'

RegisterNuiCallback('getPlayerFriends', async (_data: Array<any>, callback: (response: any) => void): Promise<void> => {
  const response = await getPlayerFriends()
  callback(response)
})