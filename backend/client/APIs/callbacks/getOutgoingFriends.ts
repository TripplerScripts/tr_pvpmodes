import lib from '../../lib'
import { GetOutgoingFriends } from '../../../server/APIs/callbacks/getOutgoingFriends'

export default (timeout?: number) => lib.callback.await<GetOutgoingFriends>('getOutgoingFriends', timeout)