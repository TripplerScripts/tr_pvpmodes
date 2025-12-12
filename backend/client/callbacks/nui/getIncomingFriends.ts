import getIncomingFriends from '../../APIs/callbacks/getIncomingFriends'

export default () => RegisterNuiCallback('getIncomingFriends', async (_data, callback) =>
  callback(await getIncomingFriends())
)