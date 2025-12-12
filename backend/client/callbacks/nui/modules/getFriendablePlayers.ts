import getFriendablePlayers from '../APIs/getFriendablePlayers'

export default (): void => RegisterNuiCallback('getFriendablePlayers', async (_data: Array<any>, callback: (response: any) => void) =>
    callback(await getFriendablePlayers())
)