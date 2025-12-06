import getFriendablePlayers from '../APIs/getFriendablePlayers'

RegisterNuiCallback('getFriendablePlayers', async (_data: Array<any>, callback: (response: any) => void): Promise<void> => {
  const response = await getFriendablePlayers()
  callback(response)
})