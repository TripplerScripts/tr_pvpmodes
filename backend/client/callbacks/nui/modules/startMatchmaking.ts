import startMatchmaking from '../../../modules/startMatchmaking'

export default (): void => RegisterNuiCallback('startMatchmaking', (_data: Array<any>, callback: (response: any) => void) =>
  callback(startMatchmaking())
)