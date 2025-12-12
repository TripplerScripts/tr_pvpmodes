import lib from '../../lib'
import { GetPlayerFriends } from '../../../server/APIs/callbacks/getPlayerFriends'

export default (timeout?: number) => lib.callback.await<GetPlayerFriends>('getPlayerFriends', timeout)