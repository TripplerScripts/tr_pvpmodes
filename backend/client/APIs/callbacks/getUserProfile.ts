import lib from '../../lib'
import { GetUserProfile } from '../../../server/APIs/callbacks/getUserProfile'

export default (timeout: number, identity: number) => lib.callback.await<GetUserProfile>('getUserProfile', timeout, identity)