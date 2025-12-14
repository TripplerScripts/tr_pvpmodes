import createNewCharacter from '../../modules/createNewCharacter'

export default () => {
  RegisterNuiCallback('createNewCharacter', (_data, callback: Function) => {
    createNewCharacter()
    callback(true)
  })
}