import getIncomingFriends from '../APIs/getIncomingFriends'

export default () => RegisterNuiCallback('getIncomingFriends', async (_data: Array<any>, callback: (response: any) => void) =>
  callback(await getIncomingFriends())
)