import removePlayerFriendship from '../APIs/removePlayerFriendship'

export default () => RegisterNuiCallback('removePlayerFriendship', async (data: Array<string>, callback: (response: any) => void) =>
  callback(await removePlayerFriendship(null, data[0]))
)