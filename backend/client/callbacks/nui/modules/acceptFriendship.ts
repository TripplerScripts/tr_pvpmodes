import acceptFriendship from '../APIs/acceptFriendship'

export default (): void => RegisterNuiCallback('acceptFriendship', async (data: Array<string>, callback: (response: any) => void) =>
  callback(await acceptFriendship(null, data[0]))
)