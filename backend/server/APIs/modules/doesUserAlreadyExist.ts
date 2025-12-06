import lib from '../../lib'
import doesUserAlreadyExist from '../../modules/doesUserExist'

export default (): void => {
  lib.callback.register('doesUserAlreadyExist', (source: string) => {
    return doesUserAlreadyExist(source)
  })
}