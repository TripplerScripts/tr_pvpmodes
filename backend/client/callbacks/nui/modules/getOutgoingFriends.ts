import getOutgoingFriends from '../APIs/getOutgoingFriends'

export default () => RegisterNuiCallback('getOutgoingFriends', async (_data: Array<any>, callback: (response: any) => void) =>
  callback(await getOutgoingFriends())
)