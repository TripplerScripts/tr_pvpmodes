import getIncomingFriends from '../APIs/getIncomingFriends'

export default () => RegisterNuiCallback('getIncomingFriends', async (_data, callback) =>
  callback(await getIncomingFriends())
)