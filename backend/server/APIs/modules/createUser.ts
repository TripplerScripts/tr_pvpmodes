import lib from '../../lib'
import createUserIntoTheDatabase from '../../modules/createUserIntoTheDatabase'

export default (): void => {
  lib.callback.register('createUser', async (source: string, name: string) => {
    const license = GetPlayerIdentifierByType(source, 'license')
    return await createUserIntoTheDatabase(license, name)
  })
}