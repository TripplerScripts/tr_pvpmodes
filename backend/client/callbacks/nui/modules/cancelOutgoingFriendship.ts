import cancelOutgoingFriendship from '../../APIs/cancelOutgoingFriendship'

export default (): void => RegisterNuiCallback('cancelOutgoingFriendship', async (data: Array<string>, callback: (response: any) => void) => 
  callback(await cancelOutgoingFriendship(null, data[0]))
)