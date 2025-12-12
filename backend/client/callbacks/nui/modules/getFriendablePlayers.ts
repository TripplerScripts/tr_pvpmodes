import getFriendablePlayers from '../APIs/getFriendablePlayers'

export default () => RegisterNuiCallback('getFriendablePlayers', async (_data: Array<any>, callback: (response: any) => void) =>
    callback(await getFriendablePlayers())
)