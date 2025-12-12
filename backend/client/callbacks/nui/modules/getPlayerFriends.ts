import getPlayerFriends from '../APIs/getPlayerFriends'

export default (): void => RegisterNuiCallback('getPlayerFriends', async (_data: Array<any>, callback: (response: any) => void) => 
  callback(await getPlayerFriends())
)