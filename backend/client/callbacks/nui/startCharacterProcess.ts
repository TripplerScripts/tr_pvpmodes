import startCharacterProcess from '../../modules/startCharacterProcess'

export default () => RegisterNuiCallback('startCharacterProcess', async (_data, callback: Function) =>
  callback(await startCharacterProcess())
)