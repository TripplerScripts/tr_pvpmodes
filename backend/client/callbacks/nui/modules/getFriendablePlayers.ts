import getFriendablePlayers from '../APIs/getFriendablePlayers'

export default () => RegisterNuiCallback('getFriendablePlayers', async (_data, callback) =>
    callback(await getFriendablePlayers())
)