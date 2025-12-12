import lib from '../../lib'
import { GetIncomingFriends } from '../../../server/APIs/callbacks/getIncomingFriends'

export default (timeout?: number) => lib.callback.await<GetIncomingFriends>('getIncomingFriends', timeout)