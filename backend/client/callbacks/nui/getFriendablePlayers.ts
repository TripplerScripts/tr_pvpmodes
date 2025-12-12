import getFriendablePlayers from '../../APIs/callbacks/getFriendablePlayers'

export default () => RegisterNuiCallback('getFriendablePlayers', async (_data, callback) =>
    callback(await getFriendablePlayers())
)