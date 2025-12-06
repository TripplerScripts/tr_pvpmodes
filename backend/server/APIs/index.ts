import lib from '../lib/index'
import createUserIntoTheDatabase from '../modules/createUserIntoTheDatabase'
import doesUserAlreadyExist from '../modules/doesUserExist'

lib.callback.register('createUser', async (source: string, name: string) => {
  const license = GetPlayerIdentifierByType(source, 'license')
  return await createUserIntoTheDatabase(license, name)
})

lib.callback.register('doesUserAlreadyExist', (source: string) => {
  return doesUserAlreadyExist(source)
})