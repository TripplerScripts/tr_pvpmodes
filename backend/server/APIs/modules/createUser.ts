import lib from '../../lib'
import createUserIntoTheDatabase from '../../modules/createUserIntoTheDatabase'
import getPlayerLicense from '../../utils/getPlayerLicense'

export default () => lib.callback.register('createUser', (source: string, name: string) => createUserIntoTheDatabase(getPlayerLicense(source), name))