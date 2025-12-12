import getOutgoingFriends from '../APIs/getOutgoingFriends'

export default () => RegisterNuiCallback('getOutgoingFriends', async (_data, callback) =>
  callback(await getOutgoingFriends())
)