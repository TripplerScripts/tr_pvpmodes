import startMatchmaking from '../../../modules/startMatchmaking'

export default () => RegisterNuiCallback('startMatchmaking', (_data: Array<any>, callback: (response: any) => void) =>
  callback(startMatchmaking())
)