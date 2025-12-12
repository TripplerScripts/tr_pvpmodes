import getPlayerFriends from '../../APIs/callbacks/getPlayerFriends'

export default () => RegisterNuiCallback('getPlayerFriends', async (_data, callback) => 
  callback(await getPlayerFriends())
)