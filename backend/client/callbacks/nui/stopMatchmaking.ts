import stopMatchmaking from '../../modules/stopMatchmaking'

export default () => RegisterNuiCallback('stopMatchmaking', (_data, callback) =>
  callback(stopMatchmaking())
)