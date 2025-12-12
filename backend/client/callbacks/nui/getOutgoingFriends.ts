import getOutgoingFriends from '../../APIs/callbacks/getOutgoingFriends'

export default () => RegisterNuiCallback('getOutgoingFriends', async (_data, callback) =>
  callback(await getOutgoingFriends())
)