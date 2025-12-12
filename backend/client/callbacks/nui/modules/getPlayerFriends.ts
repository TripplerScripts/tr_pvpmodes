import getPlayerFriends from '../APIs/getPlayerFriends'

export default () => RegisterNuiCallback('getPlayerFriends', async (_data, callback) => 
  callback(await getPlayerFriends())
)