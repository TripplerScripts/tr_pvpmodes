import lib from '../../lib'
import doesUserAlreadyExist from '../../modules/doesUserExist'

export default () => lib.callback.register('doesUserAlreadyExist', async (source: string) => doesUserAlreadyExist(source))