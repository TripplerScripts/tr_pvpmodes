import getIncomingFriends from '../../APIs/getIncomingFriends'

export default (): void => RegisterNuiCallback('getIncomingFriends', async (_data: Array<any>, callback: (response: any) => void) =>
  callback(await getIncomingFriends())
)