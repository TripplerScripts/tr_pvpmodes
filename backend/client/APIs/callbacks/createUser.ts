import lib from '../../lib'
import { CreateUser } from '../../../server/APIs/callbacks/createUser'

export default (timeout: number | undefined, name: string, avatar: string) => lib.callback.await<CreateUser>('createUser', timeout, name, avatar)