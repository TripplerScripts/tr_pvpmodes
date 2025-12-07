import getPlayerFriends from '../../APIs/getPlayerFriends'

export default (): void => RegisterNuiCallback('getPlayerFriends', (_data: Array<any>, callback: (response: any) => void): void => callback(getPlayerFriends()))