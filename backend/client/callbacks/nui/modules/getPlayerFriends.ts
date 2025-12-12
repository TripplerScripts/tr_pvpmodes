import getPlayerFriends from '../APIs/getPlayerFriends'

export default () => RegisterNuiCallback('getPlayerFriends', async (_data: Array<any>, callback: (response: any) => void) => 
  callback(await getPlayerFriends())
)