import removePlayerFriendship from '../../APIs/callbacks/removePlayerFriendship'

export default () => RegisterNuiCallback('removePlayerFriendship', async (data, callback) =>
  callback(await removePlayerFriendship(null, data[0]))
)