import lib from '../../lib'
import doesUserAlreadyExist from '../../modules/doesUserExist'

export default (): void => {
  lib.callback.register('doesUserAlreadyExist', async (source: string) => {
    return await doesUserAlreadyExist(source)
  })
}