import stopMatchmaking from '../../../modules/stopMatchmaking'

export default (): void => RegisterNuiCallback('stopMatchmaking', (_data: Array<any>, callback: (response: any) => void) =>
  callback(stopMatchmaking())
)