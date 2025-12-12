import cancelOutgoingFriendship from '../APIs/cancelOutgoingFriendship'

export default () => RegisterNuiCallback('cancelOutgoingFriendship', async (data, callback) => 
  callback(await cancelOutgoingFriendship(null, data[0]))
)