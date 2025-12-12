import startMatchmaking from '../../../modules/startMatchmaking'

export default () => RegisterNuiCallback('startMatchmaking', (_data, callback) =>
  callback(startMatchmaking())
)