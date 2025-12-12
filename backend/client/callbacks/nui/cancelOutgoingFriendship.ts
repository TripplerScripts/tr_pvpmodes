import cancelOutgoingFriendship from '../../APIs/callbacks/cancelOutgoingFriendship'

export default () => RegisterNuiCallback('cancelOutgoingFriendship', async (data, callback) => 
  callback(await cancelOutgoingFriendship(undefined, data[0]))
)