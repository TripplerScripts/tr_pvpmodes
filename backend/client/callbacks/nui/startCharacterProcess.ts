import startCharacterProcess from '../../modules/startCharacterProcess'

export default () => RegisterNuiCallback('startCharacterProcess', (_data, callback: Function) => {
  startCharacterProcess()
  callback(true)
})