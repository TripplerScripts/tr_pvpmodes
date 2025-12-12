import acceptFriendship from '../../APIs/callbacks/acceptFriendship'

export default () => RegisterNuiCallback('acceptFriendship', async (data, callback) =>
  callback(await acceptFriendship(null, data[0]))
)