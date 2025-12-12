import acceptFriendship from '../APIs/acceptFriendship'

export default () => RegisterNuiCallback('acceptFriendship', async (data, callback) =>
  callback(await acceptFriendship(null, data[0]))
)